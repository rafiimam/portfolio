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
  mongoose.model.User || mongoose.model("user", UserSchema);

export default User;
