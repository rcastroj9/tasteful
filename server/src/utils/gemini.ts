import { IEventRequirements } from '@/interfaces/EventRequirements';
import { GoogleGenAI } from '@google/genai';

const gemini = new GoogleGenAI({
  apiKey: 'AIzaSyCZvegC9-OGu1tGm_xrDgKDWTAVtkb_SI8',
});

// We have it in utils as we can use this function in different controllers, like first in quote and then we can confirm
export async function generateEventEmail(eventDetails: IEventRequirements) {
  const response = await gemini.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: 'Create an email requesting a quote in HTML for an event with the following requirements: '+  JSON.stringify(eventDetails),
    config: {
      systemInstruction: "Your response should only include an HTML string, no backticks or any other string that is not an HTML tag and content"
    }  
  });
  const cleanedHtml = response.text?.replace(/^```html\n|\n```$/g, '').trim();
  console.log("THIS IS THE HTML" + cleanedHtml);
  return cleanedHtml;
};
