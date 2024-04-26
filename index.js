document.querySelector(".btn-1").addEventListener("click", function () {
  input = document.querySelector("#email-1").value;
  if (input.slice(-10) != "@gmail.com") {
    document.querySelector("#email-1").classList.add("invalid");
    document.querySelector("#warning-msg-1").classList.add("error");
    document.querySelector("#warning-msg-1").classList.remove("hidden");
  } else {
    document.querySelector("#email-1").classList.remove("invalid");
    document.querySelector("#warning-msg-1").classList.remove("error");
    document.querySelector("#warning-msg-1").classList.add("hidden");
  }
});

document.querySelector(".btn-3").addEventListener("click", function () {
  input = document.querySelector("#email-2").value;
  if (input.slice(-10) != "@gmail.com") {
    document.querySelector("#email-2").classList.add("invalid");
    document.querySelector("#warning-msg-2").classList.add("error");
    document.querySelector("#warning-msg-2").classList.remove("hidden");
  } else {
    document.querySelector("#email-2").classList.remove("invalid");
    document.querySelector("#warning-msg-2").classList.remove("error");
    document.querySelector("#warning-msg-2").classList.add("hidden");
  }
});
