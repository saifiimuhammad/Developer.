import mongoose from "mongoose";

const connectDb = (uri) => {
  mongoose
    .connect(uri, { dbName: "Portfolio" })
    .then((data) => {
      console.log(`Connected to db: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

export { connectDb };
