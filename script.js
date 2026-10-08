function showResult(text) {
    const result = document.getElementById("result");

    result.style.display = "block";
    result.textContent = text;

    window.scrollTo({
        top: result.offsetTop - 20,
        behavior: "smooth"
    });
}


function generateEmail() {

    const topic = prompt("What is the email about?");

    if (!topic) return;

    const promptUsed = `Act as a professional workplace communication assistant.

Write a clear, polite and professional email based on the topic provided by the user.

Topic:
${topic}`;

    const output = `EMAIL GENERATOR

Prompt Used:
${promptUsed}

Demo Output:

Subject: ${topic}

Dear Team,

I hope you are well.

I am writing regarding ${topic}.

Please let me know if you require any further information.

Kind regards,
[Your Name]`;

    showResult(output);
}


function summariseMeeting() {

    const notes = prompt("Enter your meeting notes:");

    if (!notes) return;

    const promptUsed = `Act as a workplace meeting assistant.

Summarise the meeting notes provided by the user.

Identify:
- Main discussion points
- Important decisions
- Action items
- Follow-up actions

Meeting notes:
${notes}`;

    const output = `MEETING SUMMARY

Prompt Used:
${promptUsed}

Demo Summary:

Main Discussion:
${notes}

Action Items:
- Review the discussed points
- Complete assigned tasks
- Follow up with the team`;

    showResult(output);
}


function planTasks() {

    const task = prompt("What task do you need help planning?");

    if (!task) return;

    const promptUsed = `Act as a workplace productivity assistant.

Break the user's task into smaller, manageable steps.

Task:
${task}`;

    const output = `TASK PLAN

Prompt Used:
${promptUsed}

Suggested Steps:

1. Define the main objective.
2. Break the task into smaller activities.
3. Prioritise the activities.
4. Complete the highest-priority task first.
5. Review the final outcome.`;

    showResult(output);
}


function researchTopic() {

    const topic = prompt("What topic would you like to research?");

    if (!topic) return;

    const promptUsed = `Act as a research assistant.

Help the user investigate the topic provided.

Research topic:
${topic}`;

    const output = `RESEARCH ASSISTANT

Prompt Used:
${promptUsed}

Research Plan:

1. Understand the topic.
2. Identify the main areas to investigate.
3. Search reliable sources.
4. Compare information from different sources.
5. Verify important information before using it.`;

    showResult(output);
}


function workplaceChat() {

    const question = prompt("Ask a workplace-related question:");

    if (!question) return;

    const promptUsed = `Act as a helpful workplace productivity assistant.

Answer the user's workplace-related question clearly and professionally.

User question:
${question}`;

    const output = `WORKPLACE CHATBOT

Prompt Used:
${promptUsed}

Demo Response:

Your question has been received.

For a reliable workplace answer, review the relevant company policies,
procedures and trusted sources before making an important decision.`;

    showResult(output);
}


async function copyPrompt(id) {

    const promptText = document.getElementById(id).innerText;

    try {

        await navigator.clipboard.writeText(promptText);

        alert("Prompt copied successfully!");

    } catch (error) {

        const textArea = document.createElement("textarea");

        textArea.value = promptText;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);

        alert("Prompt copied successfully!");
    }
}
