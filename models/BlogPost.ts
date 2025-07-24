import mongoose, { Schema, Document, model } from "mongoose";

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  description?: string;
  content: string;
  tags: string[];
  category?: string;
  cover_image?: string;
  is_published: boolean;
  is_featured: boolean;
  views_count: number;
  created_at: Date;
  updated_at: Date;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    content: { type: String, required: true },
    tags: { type: [String], default: [] },
    category: { type: String },
    cover_image: { type: String },
    is_published: { type: Boolean, default: false },
    is_featured: { type: Boolean, default: false },
    views_count: { type: Number, default: 0 },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const BlogPost =
  mongoose.models.BlogPost || model<IBlogPost>("BlogPost", BlogPostSchema);
