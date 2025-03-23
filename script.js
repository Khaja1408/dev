// Array to hold details of Seven Wonders of India
const wonders = [
    {
        name: "Taj Mahal",
        description: "The Taj Mahal is a white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Taj_Mahal_in_March_2004.jpg/220px-Taj_Mahal_in_March_2004.jpg"
    },
    {
        name: "Qutub Minar",
        description: "Qutub Minar is a UNESCO World Heritage site and the tallest brick minaret in the world, located in Delhi.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Qutub_Minar.jpg"
    },
    {
        name: "Red Fort",
        description: "The Red Fort is a historic fort in the city of Delhi, and a symbol of India's independence struggle.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Red_Fort_-_Delhi.jpg"
    },
    {
        name: "Gateway of India",
        description: "The Gateway of India is an arch-monument in Mumbai, built during the 20th century in the Indo-Saracenic style.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Gateway_of_India_1.jpg"
    },
    {
        name: "Lotus Temple",
        description: "The Lotus Temple is a Bahá'í House of Worship, famous for its flower-like architecture, located in Delhi.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Lotus_Temple.jpg"
    },
    {
        name: "Khajuraho Temples",
        description: "The Khajuraho Temples are a group of Hindu and Jain temples known for their stunning architecture and sculptures.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Khajuraho_Western_Group_Temples.jpg"
    },
    {
        name: "Mysore Palace",
        description: "The Mysore Palace is a historic palace in the city of Mysore, known for its grandeur and stunning architecture.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Mysore_Palace.jpg"
    }
];

// Function to display the wonders on the webpage
function displayWonders() {
    const container = document.getElementById('wonders-container');
    
    wonders.forEach(wonder => {
        const wonderCard = document.createElement('div');
        wonderCard.classList.add('wonder-card');
        
        wonderCard.innerHTML = `
            <img src="${wonder.imageUrl}" alt="${wonder.name}">
            <h3>${wonder.name}</h3>
            <p>${wonder.description}</p>
        `;
        
        container.appendChild(wonderCard);
    });
}

// Call the function to display wonders on page load
window.onload = displayWonders;
