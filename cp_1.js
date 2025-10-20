const entry = document.createElement("div");
entry.textContent = "Feedback received!";
document.getElementById("feedback-display").appendChild(entry);

document.querySelector("#submit-btn").addEventListener("click", () => {
    alert("Form submitted!");
});
