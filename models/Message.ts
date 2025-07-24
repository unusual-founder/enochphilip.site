import mongoose, { Schema, Document, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IMessage extends Document {
  name: string;
  email: string;
  image?: string;
  message?: string;
  is_reply: boolean;
  reply_to?: string | null;
  is_show: boolean;
  created_at: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String },
    message: { type: String },
    is_reply: { type: Boolean, default: false },
    reply_to: { type: String, default: null },
    is_show: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: false },
    _id: false,
  },
);

export const Message =
  mongoose.models.Message || model<IMessage>("Message", MessageSchema);
