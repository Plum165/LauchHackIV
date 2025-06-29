document.getElementById('triage-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const symptoms = document.getElementById('symptoms').value;
  const location = document.getElementById('location').value;

  const prompt = `A patient in ${location} reports the following symptoms: ${symptoms}. 
Classify the urgency (triage) as: Critical, Urgent, Non-Urgent. Suggest the best action and nearby services.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer YOUR_API_KEY`, // Replace this with your API
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    document.getElementById('result').innerText = reply;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    document.getElementById('result').innerText = 'Something went wrong. Please try again.';
  }
});
