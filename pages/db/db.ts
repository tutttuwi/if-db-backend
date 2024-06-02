import mongoose from 'mongoose';
// import node from './models/node';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_API_KEY);
    console.log('succecc mongoDB');
  } catch (err) {
    console.log('Failure:Unconnected to MongoDB');
    // throw new Error()
  }
};

export default connectDB;
