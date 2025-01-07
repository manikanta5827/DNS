import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

export async function generativeAI(prompt) {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

    try {

        const result = await model.generateContent(prompt);
        // console.log('Answer',result.response.text());
        return result.response.text();

    } catch (error) {

        console.log(error.message);
        return "Error generating answer";
    }
}