//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("color-board");

    // Generate 800 boxes dynamically
    for (let i = 0; i < 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add a mouseover event listener to revert the color after 1 second
        square.addEventListener("mouseover", function () {
            setTimeout(function () {
                square.style.backgroundColor = "#ccc"; // Revert to the original color
            }, 1000); // 1000 milliseconds = 1 second
        });

        container.appendChild(square);
    }
});

