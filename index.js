const modalElement = document.getElementById("modal-container");
const removeBtn = document.getElementById("close-btn");
const formElement = document.getElementById("form");
const textContainer = document.getElementById("text-container");

//settimeout function for the modal to be displayed

setTimeout(function () {
  modalElement.style.display = "inline";
}, 3000);

//function to remove the modal

function removeModal() {
  modalElement.style.display = "none";
}
removeBtn.addEventListener("click", removeModal);

//submit form function
function formSubmitted(e) {
  e.preventDefault();
  textContainer.innerHTML = `
  <div class="modal-inner-loading">
        <img src="img/loading.svg" class="loading"/>
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
  </div>`;
}

formElement.addEventListener("submit", formSubmitted);
