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


document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  const skillsButton = document.getElementById('skills-btn');

  // Add an event listener to the button
  skillsButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior

    // Get the "Skills" section element by its id
    const skillsSection = document.getElementById('skills');

    // Scroll to the "Skills" section
    window.scrollTo({ top: skillsSection.offsetTop, behavior: 'smooth' });
  });
});

// Define the categories and their content
const skillCategories = [
  {
    title: "Languages",
    color: "text-blue-400",
    icon: "fas fa-language",
    items: [
      "Java",
      "TypeScript",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    title: "Frameworks & Libraries",
    color: "text-green-400",
    icon: "fas fa-cogs",
    items: [
      "Spring Boot",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "Android Development",
      "Unity"
    ]
  },
  {
    title: "AI & ML Tools",
    color: "text-purple-400",
    icon: "fas fa-brain",
    items: [
      "Ollama",
      "Continue.dev",
      "Vertex AI"
    ]
  },
  {
    title: "DevOps & Tools",
    color: "text-yellow-400",
    icon: "fas fa-tools",
    items: [
      "Git & GitHub",
      "Jenkins",
      "Docker",
      "AWS (EC2, S3)",
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA"
    ]
  },
  {
    title: "Database",
    color: "text-red-400",
    icon: "fas fa-database",
    items: [
      "Firebase",
      "NoSQL Databases"
    ]
  },
  {
    title: "Exploring",
    color: "text-gray-400",
    icon: "fas fa-search",
    items: [
      "Open Source LLMs"
    ]
  }
];

// Function to create skill cards
function createSkillSections() {
  const container = document.getElementById('skills-container');
  skillCategories.forEach(category => {
    // Create card
    const card = document.createElement('div');
    card.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'grow');
    
    // Create title
    const title = document.createElement('h2');
    title.classList.add('text-2xl', 'font-bold', category.color, 'mb-4');
    title.innerText = `${category.title}`;
    
    // Create list
    const list = document.createElement('ul');
    list.classList.add('text-left', 'space-y-2');
    
    category.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('text-lg', 'text-gray-200');
      listItem.innerHTML = `<i class="${category.icon} ${category.color}"></i> ${item}`;
      list.appendChild(listItem);
    });
    
    card.appendChild(title);
    card.appendChild(list);
    container.appendChild(card);
  });
}

// Call the function to create the sections
document.addEventListener('DOMContentLoaded', createSkillSections);

