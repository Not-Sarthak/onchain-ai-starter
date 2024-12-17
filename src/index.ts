import 'dotenv/config';
import OpenAI from "openai";
import readline from 'readline';
import { createAssistant } from './openai/createAssistant.js';
import { createThread } from './openai/createThread.js';
import { createRun } from './openai/createRun.js';
import { performRun } from './openai/performRun.js';
import { Thread } from 'openai/resources/beta/threads/threads';
import { Assistant } from 'openai/resources/beta/assistants';

const client = new OpenAI();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function chat(thread: Thread, assistant: Assistant): Promise<void> {
    while (true) {
        const userInput = await question('\nYou: ');

        if (userInput.toLowerCase() === 'exit') {
            rl.close();
            break;
        }

        try {
            await client.beta.threads.messages.create(thread.id, {
                role: "user",
                content: userInput
            });

            const run = await createRun(client, thread, assistant.id);
            const result = await performRun(run, client, thread);

            if (result?.type === 'text') {
                console.log('\nAlt:', result.text.value);
            }
        } catch (error) {
            console.error('Error during chat:', error instanceof Error ? error.message : 'Unknown error');
            rl.close();
            break;
        }
    }
}

async function main(): Promise<void> {
    try {
        const assistant = await createAssistant(client);
        const thread = await createThread(client);

        console.log('Chat started! Type "exit" to end the conversation.');
        await chat(thread, assistant);
    } catch (error) {
        console.error('Error in main:', error instanceof Error ? error.message : 'Unknown error');
        rl.close();
        process.exit(1);
    }
}

main().catch((error) => {
    console.error('Unhandled error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
});