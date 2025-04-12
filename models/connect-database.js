import mongoose from "mongoose";


const connect = async () => {
    try {
        //manager-user
        const conn = await mongoose.connect("mongodb://localhost:27017/");
    } catch (err) {
        console.log(`Error: ${err.message}`);  
        process.exit(1);
    };
}

export default connect;

