import mongoose from "mongoose";
import colors from "colors";

const conneDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongodb database ${conn.connection.host}`.bgGreen.white);
    }catch(error){
        console.log(`Error in mongoDB ${error}`.bgRed.white);
    }
};

export default conneDB;