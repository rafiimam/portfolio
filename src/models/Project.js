import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    technologies: String,
    website: String,
    github: String,
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.models("Project", ProjectSchema);

export default Project;
