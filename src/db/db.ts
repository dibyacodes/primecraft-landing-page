// mongodb connection

import mongoose from "mongoose";
import { DB_NAME } from "../app/constant";

export default async function connectDatabase() {
  try {
    const connection = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)

    console.log(`Connected to ${connection.connection.host}`)
  } catch (error: unknown) {
   return Response.json(
      {
        message: 'An error occured in the server',
        success: false,
        ErrorMessage : error
      },
      {status : 500}
    )
  }
}