import mongoose, { Schema, Document, model } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  description?: string;
  stacks: string[];
  content?: string;
  image?: string;
  link_demo?: string;
  link_github?: string;
  is_show: boolean;
  is_featured: boolean;
  created_at: Date;
  updated_at: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    stacks: { type: [String], default: [] },
    content: { type: String },
    image: { type: String },
    link_demo: { type: String },
    link_github: { type: String },
    is_show: { type: Boolean, default: true },
    is_featured: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const Project =
  mongoose.models.Project || model<IProject>("Project", ProjectSchema);
