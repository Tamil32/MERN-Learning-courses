document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Dark Mode";
    toggleButton.classList.add("btn", "blue", "dark-mode-toggle");
    
    // Append toggle button to the card
    document.querySelector(".card-action").prepend(toggleButton);

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        
        // Save theme preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});


const style = document.createElement("style");
style.textContent = `
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }
    .card.dark-mode {
        background-color: #1e1e1e;
        color: #ffffff;
    }
    .dark-mode .btn {
        background-color: #6200ea !important;
    }
    .dark-mode .collection-item {
        background-color: #333;
        color: white;
    }
`;
document.head.appendChild(style);