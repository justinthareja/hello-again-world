const input = document.querySelector(".js-highlight");

input.addEventListener("change", handleChange, false);
input.addEventListener("input", handleChange, false);

function handleChange(e) {
    const { name, value } = e.target;
    
    document.documentElement.style.setProperty(`--${name}`, value);
}