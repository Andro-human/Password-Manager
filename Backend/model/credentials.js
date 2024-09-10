import mongoose from "mongoose";

const credentialSchema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    websiteName: {
      type: String,
      required: [true, "websiteName is required"],
    },
    Url: {
      type: String,
      required: [true, "websiteUrl is required"],
    },
  },
  { timestamp: true }
);

export default mongoose.Schema("credential", credentialSchema);
