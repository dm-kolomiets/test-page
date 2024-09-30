"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // burger menu
  const burgerMenu = document.querySelector(".burger-button");
  const overlay = document.querySelector(".header__menu");

  if (burgerMenu && overlay) {
    burgerMenu.addEventListener("click", () => {
      [burgerMenu, overlay].forEach((el) => el.classList.toggle("open"));
    });
  }

  // remove tag
  const tagContainer = document.querySelector(".tag");

  function addDeleteListeners() {
    document.querySelectorAll(".tag__item").forEach((item) => {
      item.addEventListener("click", function () {
        this.remove();

        if (!document.querySelectorAll(".tag__item").length) {
          const message = document.createElement("h3");
          message.textContent = "please add groups";
          tagContainer.appendChild(message);
        }
      });
    });
  }

  addDeleteListeners();

  // change preview
  const thumbnailItems = document.querySelectorAll(".preview__thumbnail-item");
  const cardImage = document.querySelector(".preview__card-image");

  thumbnailItems.forEach((item) => {
    item.addEventListener("click", () => {
      thumbnailItems.forEach((el) => {
        el.classList.remove("active");
      });

      item.classList.add("active");
      const newImageSrc = item.querySelector(".preview__thumbnail-image").src;
      cardImage.src = newImageSrc;
    });
  });
});
