import { createResponse, createTxtAnswer, startUdpServer } from "denamed";
import { generativeAI } from "./generative_ai.js";

startUdpServer(async (query) => {
    const question = query.questions?.[0];
    if (!question) {
        console.error('No questions found in query');
        return createResponse(query, [createTxtAnswer('Error', 'Invalid query format')]);
    }

    console.log(`Question : ${question.name}`);

    const prompt = `Analyse the question and give me the response in one line or statement.Question : [${question.name.split('.').join(' ')}]`;

    let Answer = await generativeAI(prompt);

    console.log(`Answer : ${Answer}`);

    return createResponse(query, [createTxtAnswer(question, Answer)]);
}, { port: 8090 });

console.log('UDP server running on port 8090');
