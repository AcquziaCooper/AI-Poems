function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["When the mountain calls"],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-gen");
poemElement.addEventListener("submit", generatePoem);
