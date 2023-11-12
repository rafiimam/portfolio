import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.models("user", UserSchema);

export default User;
