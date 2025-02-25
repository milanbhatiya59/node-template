import mongoose, { Schema } from "mongoose";
import crypto from "crypto"

const adminUserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    accessKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

adminUserSchema.methods.generateAccessKey = async function () {
  return await crypto.randomBytes(32).toString("hex");
};

export const AdminUser = mongoose.model("AdminUser", adminUserSchema);
