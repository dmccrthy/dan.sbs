/**
 * Main js for website
 * @author Dan McCarthy
 */

import "../css/style.css";

const themeButton = document.getElementById("theme");

const sun = `<svg
                class="size-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <circle cx="12" cy="12" r="5" />
                <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                />
            </svg>`;

const moon = `            <svg
                class="size-8"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M42 25.58C41.6854 28.9844 40.4078 32.2288 38.3165 34.9336C36.2253 37.6383 33.407 39.6916 30.1915 40.8531C26.9759 42.0146 23.496 42.2362 20.159 41.4922C16.8221 40.7481 13.766 39.0691 11.3485 36.6516C8.93096 34.234 7.25193 31.178 6.50786 27.841C5.7638 24.504 5.98548 21.0242 7.14697 17.8086C8.30845 14.593 10.3617 11.7747 13.0665 9.68351C15.7712 7.59228 19.0156 6.31461 22.42 6C20.4269 8.69653 19.4677 12.0189 19.7171 15.3628C19.9665 18.7068 21.4078 21.8501 23.7789 24.2212C26.1499 26.5923 29.2933 28.0336 32.6372 28.2829C35.9811 28.5323 39.3035 27.5732 42 25.58Z"
                    stroke="#1E1E1E"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>`;

document.addEventListener("DOMContentLoaded", function () {
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        document.getElementById("theme").replaceChildren();
        document.getElementById("theme").innerHTML = moon;
    }

    // Show page now that styles are applied
    document.querySelector("main").classList.remove("hidden");
});

/**
 * Toggle light/dark theme for website
 */
function toggleTheme() {
    if (localStorage.getItem("color-theme") === "dark") {
        localStorage.setItem("color-theme", "light");
        document.documentElement.classList.remove("dark");
        document.getElementById("theme").replaceChildren();
        document.getElementById("theme").innerHTML = sun;
    } else {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.classList.add("dark");
        document.getElementById("theme").replaceChildren();
        document.getElementById("theme").innerHTML = moon;
    }
}

function toggleMobileNav() {
    let dropdown = document.getElementById("mobile-dropdown");

    dropdown.classList.toggle("hidden");
}

// Register functions
window.toggleTheme = toggleTheme;
window.toggleMobileNav = toggleMobileNav;
