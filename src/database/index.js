import mongoose from "mongoose";

export default async function connectToDB() {
    try{
        await mongoose.connect("mongodb+srv://rafiimam96:zakia.1234@portfolio.4wadfeh.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database connected successfully");
    } catch (e) {
        console.log(e);
    }
}