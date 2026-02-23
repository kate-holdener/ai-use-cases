export const USE_CASES: UseCase[] = [
  {
    id: "1",
    categories: ["Course Content Development", "Examples and Illustrations"],
    title: "Finding Real-World Examples for Human Behavior Models",
    description: "Using AI to identify example systems and their histories that align with different models of human behavior, including pointers to references. The faculty member then expands from the AI-generated starting points.",
    tools: []
  },
  {
    id: "3",
    categories: ["Course Content Development", "Examples and Illustrations"],
    title: "Generating Code Examples and Exercises",
    description: "Using AI to generate code examples and exercises targeting specific software engineering concepts, such as Don't Repeat Yourself (DRY) violations and software coupling scenarios.",
    tools: []
  },
  {
    id: "4",
    categories: ["Course Content Development", "Examples and Illustrations"],
    title: "Demonstrating AI Limitations Live in Class",
    description: "Using AI to write intentionally buggy code that looks mostly correct, then debugging and fixing it live in class. This illustrates how AI can be incorrect even when it gets most of the way there, while also teaching framework concepts.",
    tools: []
  },
  {
    id: "6",
    categories: ["Course Content Development", "Creating Assessments and Assignments"],
    title: "Reviewing Assignments for Clarity and Ambiguity",
    description: "Submitting homework assignments, exams, and quizzes to AI to identify ambiguous wording and receive suggestions for simplification before distributing to students.",
    tools: []
  },
  {
    id: "7",
    categories: ["Course Content Development", "Creating Assessments and Assignments"],
    title: "AI-Generated Quiz Questions from Course Materials",
    description: "Using Zybooks' built-in AI feature to generate quiz questions by specifying the topic and relevant chapters, then editing results to fit the course's needs.",
    tools: ["Zybooks"]
  },
  {
    id: "8",
    categories: ["Course Content Development", "Creating Instructional Materials"],
    title: "AI-Generated Lecture Videos from Slide Decks",
    description: "Uploading lecture slide PDFs (or videos) to NotebookLM to automatically generate a new set of slides and a scripted lecture video. The output can serve as a supplementary resource for students.",
    tools: ["NotebookLM"]
  },
  {
    id: "9",
    categories: ["Processing Assessments and Providing Feedback"],
    title: "Generating Personalized Peer Feedback Emails",
    description: "Using AI to synthesize peer evaluation ratings submitted by students into individualized feedback emails for each team member, giving students qualitative insight beyond just a numeric score.",
    tools: []
  },
  {
    id: "10",
    categories: ["Processing Assessments and Providing Feedback"],
    title: "Summarizing Student Reflection Surveys",
    description: "Using AI to summarize and extract themes from student reflection surveys, reducing manual effort while surfacing key insights from student responses.",
    tools: []
  },
  {
    id: "12",
    categories: ["Processing Assessments and Providing Feedback"],
    title: "Categorizing Student Questions and Drafting Answers",
    description: "Collecting student questions about course materials and using AI to group them by common confusion points, then drafting sample answers that the instructor reviews and refines.",
    tools: []
  },
  {
    id: "13",
    categories: ["Research Support"],
    title: "Identifying Starting Points in New Research Areas",
    description: "Using AI to quickly get an overview and jumping-off points when exploring a new research area. Useful for shaping initial understanding, though faculty note a risk of hallucinated references and findings.",
    tools: []
  },
  {
    id: "14",
    categories: ["Research Support"],
    title: "AI-Assisted First Draft Generation from Argument Outlines",
    description: "Having students write out the general flow of an argument in rough note form, then using AI to generate a plausible first-draft paragraph from that outline. The student remains responsible for content, flow, and accuracy.",
    tools: []
  },
  {
    id: "15",
    categories: ["Programming"],
    title: "Generating Testing Harnesses and Autograders",
    description: "Using AI tools to help generate testing harnesses and autograders for programming courses, reducing the manual effort involved in setting up automated assessment infrastructure.",
    tools: []
  },
  {
    id: "16",
    categories: ["Review"],
    title: "Reviewing Unfamiliar Material and Generating Lecture Outlines",
    description: "Using AI to review topics the instructor is less intimately familiar with, and to generate outlines for lectures or suggestions for programming assignments in those areas.",
    tools: []
  },
  {
    id: "17",
    categories: ["Course Content Development", "Examples and Illustrations"],
    title: "Teaching Students to Critically Evaluate AI Responses",
    description: "Deliberately using GenAI in class to demonstrate that it does not always produce correct answers, helping students develop critical analysis skills when evaluating AI-generated content.",
    tools: []
  },
  {
    id: "18",
    categories: ["Course Content Development", "Examples and Illustrations"],
    title: "Asking Students to Reflect on Their Own AI Usage",
    description: "Incorporating student reflection prompts into assignments, asking students to describe and analyze how they used AI tools during the completion of a specific task.",
    tools: []
  }
];