import connectDatabase from "@/src/db/db";
import Subscriber from "@/src/models/subscriber.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const subscriberEmail = await request.json();
    const { email } = subscriberEmail;

    if (email?.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide an email to subscribe",
        },
        { status: 400 },
      );
    }

    connectDatabase();

    const isAlreadySubscribed = await Subscriber.findOne({ $or: [{ email }] });

    if (isAlreadySubscribed) {
      return NextResponse.json(
        {
          success: false,
          message: `Subscription with ${email} already exists`,
        },
        { status: 409 },
      );
    }

    const newSubscriber = await Subscriber.create({
      email: email,
    });

    const verifyCreate = await Subscriber.findById(newSubscriber._id);

    if (!verifyCreate) {
      return NextResponse.json(
        {
          success: false,
          message: `We couldn't get you in, please try later`,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `You are subscriber, and you will be notified`,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred & we are working on it.",
        ErrorMessage: error,
      },
      { status: 500 },
    );
  }
}
