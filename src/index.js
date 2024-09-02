function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userPrompts = document.querySelector("#user-prompts");
  let apiKey = "faa1b7a84c09e076f6304e2co3ba683t";
  let context =
    "You are a fine poem writer, please write a precise short poem based on the user prompts";
  let prompt = `Generate an English poem about ${userPrompts.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛Generating an English poem about ${userPrompts.value}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-gen");
poemElement.addEventListener("submit", generatePoem);
