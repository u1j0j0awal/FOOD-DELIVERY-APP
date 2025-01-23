import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://umeshc0509:6bqHmOfPOKf3nf6y@cluster0.cao1k.mongodb.net/food-del').then(console.log("DB connected successfully"))
}
