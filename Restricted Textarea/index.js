const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxChars = 250;

textarea .addEventListener("input", () => {
  const currentLength = textarea.value.length;

  charCount.textContent = `${currentLength} / ${maxChars}`;

  if (currentLength >= maxChars) {
    textarea.classList.add("limit-reached");
    charCount.style.color = "red";
  } else {
    textarea.classList.remove("limit-reached");
    charCount.style.color = "black";
  }
})