import mongoose from "mongoose";

const dbConfig = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connection Successful")
})
    .catch((err) => {
        console.error("Error in MongoDB connection")
});
};

export default dbConfig;
