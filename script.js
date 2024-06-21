document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.getElementById("open-modal-button");
  const closeModalButton = document.querySelector(".modal-button");
  const modalContainer = document.querySelector(".modal-container");

  openModalButton.addEventListener("click", () => {
    modalContainer.classList.add("is-open");
  });

  closeModalButton.addEventListener("click", () => {
    modalContainer.classList.remove("is-open");
  });

  modalContainer.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove("is-open");
    }
  });
});
