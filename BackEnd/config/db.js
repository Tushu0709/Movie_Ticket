// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () =>
//       console.log("Database Connected")
//     );
//     await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default connectDB;
// connectDB.js (example)
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('MONGO_URI', process.env.MONGO_URI);   // <-- add this temporarily
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
