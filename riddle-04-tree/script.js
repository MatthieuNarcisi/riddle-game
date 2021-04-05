function confirm() {
  const codeInput = document.getElementById("code");

  if (codeInput.value.toLowerCase() === "flamel") {
    const nextStep = document.getElementById("next-step");

    nextStep.classList.remove("hide");
    nextStep.classList.add("reveal");

    const puzzleForm = document.getElementById("puzzle-form");

    puzzleForm.classList.add("hide");
  }
}
