function confirm() {
  const codeInput = document.getElementById("code");

  if (codeInput.value.toLowerCase() === "pic-434") {
    const nextStep = document.getElementById("next-step");

    nextStep.classList.add("reveal");

    const puzzleForm = document.getElementById("puzzle-form");

    puzzleForm.classList.add("hide");
  }
}
