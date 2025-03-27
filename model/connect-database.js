import mongoose from 'mongoose';

export const Connect = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mern-product');
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);  
        process.exit(1);
    }
    
};