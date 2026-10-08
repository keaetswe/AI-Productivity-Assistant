function generateEmail() {
    const topic = prompt("What is the email about?");

    if (!topic) return;

    const email = `
Subject: ${topic}

Dear Team,

I hope you are doing well.

I am writing regarding ${topic}.

Please let me know if you require any additional information or have any questions.

Kind regards,
Employee
`;

    showResult(email);
}

function summariseMeeting() {
    const notes = prompt("Paste your meeting notes:");

    if (!notes) return;

    const summary = `
MEETING SUMMARY

Key Discussion:
${notes}

Action Items:
• Review the points discussed
• Assign responsibilities
• Follow up on outstanding tasks

Next Step:
Schedule a follow-up meeting if required.
`;

    showResult(summary);
}

function planTasks() {
    const task = prompt("What task do you need to complete?");

    if (!task) return;

    const plan = `
TASK PLAN

Main Task:
${task}

Priority:
High

Steps:
1. Define the objective
2. Break the task into smaller activities
3. Complete the most important activity first
4. Review the completed work
5. Submit or implement the final result

Status:
Not Started
`;

    showResult(plan);
}

function researchTopic() {
    const topic = prompt("What topic would you like to research?");

    if (!topic) return;

    const research = `
RESEARCH ASSISTANT

Topic:
${topic}

Research Approach:
1. Define the research question
2. Identify reliable sources
3. Compare information from multiple sources
4. Summarise the key findings
5. Record references

Important:
Always verify AI-generated information using reliable sources.
`;

    showResult(research);
}

function workplaceChat() {
    const question = prompt("Ask the workplace assistant a question:");

    if (!question) return;

    const response = `
AI WORKPLACE ASSISTANT

Your question:
${question}

Suggested response:

I can help you approach this workplace task by identifying
the main objective, breaking it into smaller steps and
suggesting an appropriate solution.

Remember to review AI-generated information before using it
in a professional setting.
`;

    showResult(response);
}

function showResult(text) {
    const result = document.getElementById("result");

    result.innerText = text;
    result.style.display = "block";
}
