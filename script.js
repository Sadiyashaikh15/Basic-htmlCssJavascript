// HackMate - A simple utility script

// Function to generate a random hackathon team name
function generateTeamName() {
    const adjectives = ["Dynamic", "Innovative", "Creative", "Brilliant", "Agile"];
    const nouns = ["Hackers", "Coders", "Developers", "Builders", "Makers"];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${randomAdjective} ${randomNoun}`;
}

// Function to calculate remaining time for a hackathon
function calculateRemainingTime(endTime) {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end - now;

    if (diff <= 0) {
        return "Hackathon has ended!";
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `Time remaining: ${hours}h ${minutes}m ${seconds}s`;
}

// Example usage
console.log("Welcome to HackMate!");
console.log("Your team name is:", generateTeamName());
console.log(calculateRemainingTime("2023-12-31T23:59:59"));