import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_TEXT } from '../constants';

// Per guidelines:
// - API key must be obtained exclusively from process.env.API_KEY.
// - Assume this variable is pre-configured, valid, and accessible.
// - Use process.env.API_KEY string directly when initializing.
//
// The reported "Uncaught SyntaxError: Missing initializer in const declaration"
// likely stems from a line like `const someName = process.env.API_KEY;` where
// `process.env.API_KEY` is replaced by an empty token by the build system if the
// environment variable is not set during the build, resulting in `const someName = ;`.
//
// By directly using `process.env.API_KEY` in the constructor, we adhere to guidelines.
// If `process.env.API_KEY` is not properly substituted by the build system,
// a syntax error might still occur (e.g., `apiKey: ,` in the object literal), or a runtime error
// if it's `undefined` and the constructor expects a string. The assumption is that the build system handles this.

let ai: GoogleGenAI;

try {
  // We must assume process.env.API_KEY is a string here.
  // If it's not, and the bundler made it e.g. `undefined` (the keyword),
  // GoogleGenAI constructor might error. If it made it an empty token,
  // then `apiKey: ,` would be a syntax error from the transpiled output.
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (e: any) {
    console.error("CRITICAL: Failed to initialize GoogleGenAI. This is likely due to an issue with the API_KEY (e.g., missing, invalid, or not correctly inserted by the build process). AI features will not work.", e);
    // Create a dummy 'ai' object that will throw errors if its methods are called.
    // This helps prevent cascading 'ai is undefined' errors throughout the app.
    ai = {
        chats: {
            create: () => { 
                throw new Error("GoogleGenAI client was not initialized, likely due to an API_KEY problem. Cannot create chat session."); 
            }
        },
        models: {
            generateContent: async () => { 
                throw new Error("GoogleGenAI client was not initialized, likely due to an API_KEY problem. Cannot generate content."); 
            },
            generateContentStream: async function* () {
                 throw new Error("GoogleGenAI client was not initialized, likely due to an API_KEY problem. Cannot generate content."); 
            },
            generateImages: async () => {
                throw new Error("GoogleGenAI client was not initialized, likely due to an API_KEY problem. Cannot generate images.");
            }
        }
    } as any as GoogleGenAI; // Cast to satisfy TypeScript, acknowledging this is a mock.
}


export const createChatSession = (systemInstruction: string): Chat => {
  if (!process.env.API_KEY && !(ai.chats && typeof ai.chats.create === 'function' && ai.chats.create.toString().includes("GoogleGenAI client was not initialized"))) {
      // Log a warning if API_KEY is falsy at runtime AND we are not already using the dummy 'ai' object.
      // The dummy object's methods already throw, so this warning would be redundant if that's the case.
      console.warn(
        "API_KEY for Gemini is not available in process.env. AI features may not work as expected. Ensure the API_KEY environment variable is configured and accessible to the application."
      );
  }
  try {
    return ai.chats.create({
        model: GEMINI_MODEL_TEXT,
        config: {
          systemInstruction: systemInstruction,
        },
    });
  } catch (e: any) {
      console.error("Error creating chat session in geminiService:", e);
      throw new Error(`Failed to create chat session: ${e.message || 'Unknown error'}. Please check your API key, network connection, and Gemini model availability.`);
  }
};

export const sendMessage = async (
  chat: Chat,
  message: string
): Promise<{ text: string; groundingMetadata?: unknown }> => {
  if (!chat || typeof chat.sendMessage !== 'function') {
    // This could happen if createChatSession failed and returned something unexpected, or if the dummy ai object was used.
    console.error("sendMessage called with an invalid chat object.");
    return { 
        text: "Грешка: Чат сесията не е валидна. Моля, опреснете страницата. (Error: Chat session is not valid. Please refresh the page.)", 
        groundingMetadata: undefined 
    };
  }
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    const text = result.text;
    const groundingMetadata = result.candidates?.[0]?.groundingMetadata;
    return { text, groundingMetadata };
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    let errorMessageText = "Грешка при комуникация с AI. Моля, опитайте отново. (An unknown error occurred while communicating with AI. Please try again.)";
    if (error instanceof Error) {
        errorMessageText = `Грешка при комуникация с AI: ${error.message}. Моля, опитайте отново. (Error communicating with AI: ${error.message}. Please try again.)`;
    }
    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        const lowerCaseErrorMessage = error.message.toLowerCase();
        if (lowerCaseErrorMessage.includes('api key') || lowerCaseErrorMessage.includes('permission denied') || lowerCaseErrorMessage.includes('authentication')) {
             errorMessageText = `Грешка: Проблем с API ключа (невалиден, липсващ или недостатъчни права). Моля, проверете конфигурацията. (Error: API key issue (invalid, missing, or insufficient permissions). Please check configuration.)`;
        }
    }
    return { text: errorMessageText, groundingMetadata: undefined };
  }
};

export const getSimpleAIResponse = async (prompt: string, systemInstruction?: string): Promise<string> => {
  if (!ai.models || typeof ai.models.generateContent !== 'function') {
    console.error("getSimpleAIResponse called but ai.models.generateContent is not available, likely due to initialization failure.");
     return "Грешка: AI услугата не е инициализирана правилно. (Error: AI service not initialized correctly.)";
  }
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: prompt,
      ...(systemInstruction && { config: { systemInstruction } }),
    });
    return response.text;
  } catch (error) {
    console.error("Error getting simple AI response:", error);
    let errorMessageText = "Възникна грешка при обработка на заявката.";
     if (error instanceof Error) {
        errorMessageText = `Грешка: ${error.message}`;
    }
    if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
       const lowerCaseErrorMessage = error.message.toLowerCase();
       if (lowerCaseErrorMessage.includes('api key') || lowerCaseErrorMessage.includes('permission denied') || lowerCaseErrorMessage.includes('authentication')) {
             errorMessageText = `Грешка: Проблем с API ключа (невалиден, липсващ или недостатъчни права). Моля, проверете конфигурацията. (Error: API key issue (invalid, missing, or insufficient permissions). Please check configuration.)`;
        }
    }
    return errorMessageText;
  }
};