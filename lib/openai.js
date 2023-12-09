import axios from 'axios';


// Function to create a chat completion
export async function createChatCompletion(messages) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_OPENAI_apiKey}`, // Replace with your OpenAI API key
  };

  const payload = {
    model: 'gpt-3.5-turbo', // Replace with the desired model
    messages: messages,
  };

  try {
    const response = await axios.post(url, payload, { headers });
    const completion = response.data.choices[0].message;
    console.log('Assistant response:', completion.content);
    // Process the assistant's response as needed
  } catch (error) {
    console.error('Error:', error.response.data);
    // Handle the error
  }
}


