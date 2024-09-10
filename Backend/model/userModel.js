import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    Avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    Name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamp: true }
);

export default mongoose.schema('user', userModel)
