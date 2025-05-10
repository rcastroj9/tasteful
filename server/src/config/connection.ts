const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:DistanceSucks1!@teamoutdb.trivibm.mongodb.net/teamOutAI?retryWrites=true&w=majority&appName=TeamOutDB";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectDatabase() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
