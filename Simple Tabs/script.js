const buttons = document.querySelectorAll(".tab-buttons button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    contents.forEach((content) => {
      if (content.classList.contains(targetTab)) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");
  });
});
