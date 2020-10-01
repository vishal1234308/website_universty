function onFirstStepComplete() {
  var heading = document.getElementById("stepOne");
  var step = document.getElementById("stepA");
  var step2matter = document.getElementById("stepB");
  heading.classList.add("completedStep");
  step.classList.remove("active");
  step2matter.classList.add("activeBlock");
}
function onPaymentDone() {
  var heading = document.getElementById("stepTwo");
  var heading2 = document.getElementById("stepThree");
  var step = document.getElementById("stepB");
  var step2matter = document.getElementById("stepC");
  heading.classList.add("completedStep");
  heading2.classList.add("completedStep");
  step.classList.remove("activeBlock");
  step2matter.classList.add("activeBlock");
}
