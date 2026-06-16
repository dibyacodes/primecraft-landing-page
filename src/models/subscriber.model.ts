import { model, models, Schema } from "mongoose";

const subscriberModel = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const Subscriber = models.Subscriber || model("Subscriber", subscriberModel);

export default Subscriber;
