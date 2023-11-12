import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    heading: String,
    summary: String,
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.Home || mongoose.models("Home", HomeSchema);

export default Home;
