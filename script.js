const submitBtn = document.querySelector(".submit");
const ask = document.querySelector(".ask");
const thanks = document.querySelector(".thanks");
const ratingBtns = document.querySelectorAll(".rating__btn");
const score = document.querySelector(".score");
let starScore = "";

submitBtn.addEventListener("click", onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function onSubmit() {
  ask.classList.add("hide");
  score.textContent = starScore;
  thanks.classList.remove("hide");
  console.log("submit click");
}

function handleRatingBtnClick(e) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (e.target.classList.contains("rating-btn")) {
    e.target.classList.add("active");
  } else {
    e.target.classList.add("active");
  }
  starScore = e.target.textContent;

  //   console.log("rating");
}
