const modalElement = document.getElementById("modal-container");
const removeBtn = document.getElementById("close-btn");
const formElement = document.getElementById("form");
const textContainer = document.getElementById("text-container");
const declineButton = document.getElementById("decline");
const buttonContainer = document.getElementById("button-container");

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
        <i class="fa-solid fa-spinner fa-spin loading" style="color: #f10427;"></i>
        <p id="uploadText">
        Uploading your data to the dark web...
        </p>
  </div>`;

  setTimeout(function () {
    document.getElementById("uploadText").innerText = `
    Making the sale...`;
  }, 6000);

  setTimeout(function () {
    modalElement.innerHTML = `
    <div class="close-btn-container">
          <button id="close-btn">X</button>
        </div>
    <h2>Thanks you sucker!</h2>
    <img src="img/evil-laugh.jpg" class="meme"/>
    <p id="uploadText">
        We just sold the right to your eternal soul.
        </p>
    `;
  }, 9000);
}

formElement.addEventListener("submit", formSubmitted);

//function for reverse flex
function changeButtons() {
  buttonContainer.classList.toggle("reverse");
}
declineButton.addEventListener("mouseenter", changeButtons);
