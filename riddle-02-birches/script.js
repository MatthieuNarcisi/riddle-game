function confirm01() {
  const codeInput = document.getElementById("code-01");

  if (codeInput.value.toLowerCase() === "pic-434") {
    const nextStep = document.getElementById("next-step-01");

    nextStep.classList.remove("hide");
    nextStep.classList.add("reveal");

    const puzzleForm = document.getElementById("puzzle-form-01");

    puzzleForm.classList.add("hide");
  }
}

function confirm02() {
  const codeInput = document.getElementById("code-02");

  if (codeInput.value.toLowerCase() === "ponant") {
    const nextStep = document.getElementById("next-step-02");

    nextStep.classList.remove("hide");
    nextStep.classList.add("reveal");

    const puzzleForm = document.getElementById("puzzle-form-02");

    puzzleForm.classList.add("hide");
  }
}
