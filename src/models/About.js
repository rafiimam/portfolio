import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    about: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  {
    timestamps: true,
  }
);

const About = mongoose.model.About || mongoose.model("About", AboutSchema);

export default About;
