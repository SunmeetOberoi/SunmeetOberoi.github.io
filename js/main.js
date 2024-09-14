//----------------------START---- Icon Changers
// Define an array of emojis to cycle through
const emojis = ["👨‍💻", "🤖", "🚀", "😎", "🔥", "🥷"];

// Get a reference to the favicon link element
const faviconLink = document.querySelector('link[rel="icon"]');

// Initialize the current index in the emojis array
let currentIndex = 0;

// Function to update the favicon with the next emoji
function updateFavicon() {
  const newEmoji = emojis[currentIndex];
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${newEmoji}</text></svg>`;
  faviconLink.href = `data:image/svg+xml,${encodeURIComponent(svgString)}`;
  currentIndex = (currentIndex + 1) % emojis.length;
}

// Call the updateFavicon function every 10 seconds
setInterval(updateFavicon, 10000);
//----------------------END---- Icon Changers

function smoothScrollTo(id) {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: "smooth",
  });
}

// Define the categories and their content
const skillCategories = [
  {
    title: "Programming Languages",
    color: "text-blue-400",
    icon: "fas fa-code",
    items: [
      "<b class='font-extrabold'>Java</b>",
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "text-green-400",
    icon: "fas fa-cogs",
    items: [
      "<b class='font-extrabold'>Spring Boot</b>",
      "<b class='font-extrabold'>Angular</b>",
      "Bootstrap & Tailwind CSS",
      "Android Development",
      "Unity",
      "Discord Bots",
      "Google AR Core",
    ],
  },
  {
    title: "Databases",
    color: "text-yellow-400",
    icon: "fas fa-database",
    items: ["SQL", "NoSQL (e.g., Firebase Firestore)"],
  },
  {
    title: "Backend Development",
    color: "text-red-400",
    icon: "fas fa-server",
    items: [
      "Firebase",
      "Node.js & Express.js",
      "RESTful API Design",
      "Authentication & JWT",
      "Serverless Functions",
    ],
  },
  {
    title: "DevOps",
    color: "text-teal-400",
    icon: "fas fa-tools",
    items: [
      "Git & GitHub",
      "Jenkins",
      "Docker",
      "CI/CD Pipelines",
      "Cloud Foundry",
    ],
  },
  {
    title: "Tools",
    color: "text-purple-400",
    icon: "fas fa-tools",
    items: [
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Spring Tool Suite(STS)",
      "Postman",
      "WSL2",
    ],
  },
  {
    title: "Cloud Platforms",
    color: "text-orange-400",
    icon: "fas fa-cloud",
    items: [
      "AWS (Amazon Web Services)",
      "Microsoft Azure",
      "GCP (Google Cloud Platform)",
      "Vultr",
      "Krutrim",
    ],
  },
  {
    title: "AI & ML Tools",
    color: "text-pink-400",
    icon: "fas fa-robot",
    items: ["Ollama", "Continue.dev", "Vertex AI"],
  },
  {
    title: "Exploring",
    color: "text-gray-400",
    icon: "fas fa-search",
    items: ["Open Source LLMs"],
  },
];

// Function to create skill cards
function createSkillSections() {
  const container = document.getElementById("skills-container");
  skillCategories.forEach((category) => {
    // Create card
    const card = document.createElement("div");
    card.classList.add("bg-gray-800", "p-6", "rounded-lg", "grow");

    // Create title
    const title = document.createElement("h2");
    title.classList.add("text-2xl", "font-bold", category.color, "mb-4");
    title.innerText = `${category.title}`;

    // Create list
    const list = document.createElement("ul");
    list.classList.add("text-left", "space-y-2");

    category.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.classList.add("text-lg", "text-gray-200");
      listItem.innerHTML = `<i class="${category.icon} ${category.color} mr-2"></i> ${item}`;
      list.appendChild(listItem);
    });

    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

// Call the function to create the sections
document.addEventListener("DOMContentLoaded", createSkillSections);

