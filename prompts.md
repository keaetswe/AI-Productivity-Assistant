# AI Prompt Engineering

## 1. Email Generation Prompt

### Prompt
Act as a professional workplace communication assistant.

Write a clear, polite and professional email based on the topic provided by the user.

The email should:
- Have a suitable subject line
- Use professional language
- Be concise and easy to understand
- Include an appropriate greeting and closing

Topic:
[User's topic]

### Expected Output
A professional workplace email that can be reviewed and edited before sending.

---

## 2. Meeting Summarisation Prompt

### Prompt
Act as a workplace meeting assistant.

Summarise the meeting notes provided by the user.

Identify:
- Main discussion points
- Important decisions
- Action items
- People responsible for tasks, if mentioned
- Follow-up actions

Do not add information that was not included in the meeting notes.

Meeting notes:
[User's notes]

### Expected Output
A concise and structured meeting summary.

---

## 3. Task Planning Prompt

### Prompt
Act as a workplace productivity assistant.

Break the user's task into smaller, manageable steps.

For each task:
- Identify the main objective
- Suggest logical steps
- Suggest a priority
- Identify the expected outcome

Task:
[User's task]

### Expected Output
A clear and practical task plan.

---

## 4. Research Assistance Prompt

### Prompt
Act as a research assistant.

Help the user investigate the topic provided.

Provide:
- A brief explanation of the topic
- Key areas to investigate
- Suggested search questions
- Reliable source types to consult
- Important information that should be verified

Do not present unverified information as fact.

Research topic:
[User's topic]

### Expected Output
A structured research plan that helps the user conduct further research.

---

## 5. Workplace Chatbot Prompt

### Prompt
Act as a helpful workplace productivity assistant.

Answer the user's workplace-related question clearly and professionally.

If the question is unclear, ask for clarification.

If you are uncertain about information, state that the information should be verified.

User question:
[User's question]

### Expected Output
A helpful, concise workplace response.

---

# Prompt Engineering Techniques Used

The project uses several prompt engineering techniques:

1. **Role prompting** – The AI is given a specific role such as workplace assistant or research assistant.

2. **Clear instructions** – Each prompt explains exactly what the AI should do.

3. **Output structure** – The prompts specify the information that should be included in the response.

4. **Context** – The user's topic, notes or question is provided as input.

5. **Responsible AI instructions** – The prompts instruct the AI not to invent information and to verify important information.

6. **Task decomposition** – Large tasks are broken into smaller steps to make them easier to complete.
