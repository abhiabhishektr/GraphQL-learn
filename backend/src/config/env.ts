import * as dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

interface EnvConfig {
    JWT_SECRET: string;
    MONGO_URI: string;

}

// Create the config object by pulling values from environment variables
const env: EnvConfig = {
    JWT_SECRET: process.env.JWT_SECRET as string || 'your-jwt-secret-key',  // Use a proper secret string here
    MONGO_URI: process.env.MONGO_URI as string || 'mongodb://localhost:27017/Learn-GraphQL',  // Valid MongoDB URI
};


// Log loaded environment variables for debugging
console.log("Environment Variables Loaded:", env);

// Ensure that all necessary environment variables are set
// if ( !envConfig.EMAIL_USER || !envConfig.EMAIL_PASS ) {
//     throw new Error("Missing required environment variables");
// }

export default env;
