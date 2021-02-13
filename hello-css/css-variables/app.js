const input = document.querySelector(".js-highlight");

input.addEventListener("change", handleChange, false);
input.addEventListener("input", handleChange, false);

// Another way to set default value of color picker
const rootStyles = window.getComputedStyle(document.documentElement);
input.setAttribute("value", rootStyles.getPropertyValue("--highlight"));

function handleChange(e) {
    const { name, value } = e.target;
    
    document.documentElement.style.setProperty(`--${name}`, value);
}