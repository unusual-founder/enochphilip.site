import { Schema, model, models, Document } from "mongoose";

export interface IAchievement extends Document {
  slug: string;
  name: string;
  issuing_organization?: string;
  category?: string;
  url_credential?: string;
  image?: string;
  issue_date?: Date;
  expiration_date?: Date;
  is_show: boolean;
  created_at: Date;
  updated_at: Date;
}

const AchievementSchema = new Schema<IAchievement>(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    issuing_organization: { type: String },
    category: { type: String },
    url_credential: { type: String },
    image: { type: String },
    issue_date: { type: Date },
    expiration_date: { type: Date },
    is_show: { type: Boolean, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

export const Achievement =
  models.Achievement || model<IAchievement>("Achievement", AchievementSchema);
