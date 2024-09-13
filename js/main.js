// Define an array of emojis to cycle through
const emojis = ["👨‍💻", "🤖", "🚀", "😎", "🔥", "🥷", "🐦‍🔥"];

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

// Call the updateFavicon function every 5 seconds
setInterval(updateFavicon, 2000);
