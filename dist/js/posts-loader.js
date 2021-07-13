'use strict';
// === Variables ===
const loadMoreButton = document.querySelector(".more-posts__load-more"),
  additionalPosts = document.querySelector(".more-posts__additional");

// === Functions ===
function loadPosts(event) {
    if (event?.target) {
        additionalPosts.style.display = 'block';
        loadMoreButton.style.display = 'none';
        loadMoreButton.removeEventListener('click', loadPosts);
    }
}

// === Events ===
loadMoreButton.addEventListener('click', loadPosts);