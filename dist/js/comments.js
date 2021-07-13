// DOM
const posts = document.querySelectorAll(".post");

// === Functions ===
function showComments(itemEvent) {
  const showButton = itemEvent.target.querySelector(".comments__press"),
    text = itemEvent.target.querySelector(".comment__text"),
    submitButton = itemEvent.target.querySelector(".comment__submit"),
    comments = itemEvent.target.querySelectorAll(".comments__comment");
}

// === Events ===
// Show comment section
posts.forEach((i) => {
  i.addEventListener("click", showComments);
});
