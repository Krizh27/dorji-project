const btn = document.getElementById("themeToggle");

/* apply saved theme ASAP */
if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.add("light-theme");
}

/* set icon safely */
function setIcon() {
    if (!btn) return;
    btn.textContent =
        document.documentElement.classList.contains("light-theme")
        ? "☀️"
        : "🌙";
}

setIcon();

/* toggle */
if (btn) {
    btn.onclick = () => {
        document.documentElement.classList.toggle("light-theme");

        const isLight =
            document.documentElement.classList.contains("light-theme");

        localStorage.setItem("theme", isLight ? "light" : "dark");
        setIcon();
    };
}
