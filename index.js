const modalElement = document.getElementById("modal-container");
const removeBtn = document.getElementById("close-btn");

setTimeout(function () {
  modalElement.style.display = "inline";
}, 3000);

removeBtn.addEventListener("click", removeModal);

function removeModal() {
  modalElement.style.display = "none";
}
