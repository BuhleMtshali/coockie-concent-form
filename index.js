const modalElement = document.getElementById("outer-modal");
const removeBtn = document.getElementById("close-btn");
const formElement = document.getElementById("form");
const textContainer = document.getElementById("text-container");
const declineButton = document.getElementById("decline");
const buttonContainer = document.getElementById("button-container");

removeBtn.addEventListener("click", removeModal);
function removeModal() {
  modalElement.style.display = "none";
}

//function for reverse flex
function changeButtons() {
  buttonContainer.classList.toggle("reverse");
}
declineButton.addEventListener("mouseenter", changeButtons);

//settimeout function for the modal to be displayed

setTimeout(function () {
  modalElement.style.display = "inline";
}, 3000);

//submit form function
function formSubmitted(event) {
  event.preventDefault();
  const consentFormData = new FormData(formElement);
  const fullName = consentFormData.get("fullName");

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
    const newContent = `
        
    <h2>Thanks <span class="red-name"> ${fullName}</span> you sucker!</h2>
    <img src="img/evil-laugh.jpg" class="meme"/>
    <p id="uploadText">
        We just sold the right to your eternal soul.
        </p>
    `;
    document.querySelector(".modal-container").innerHTML = newContent;
    removeBtn.disabled = false;
    removeBtn.style.cursor = "pointer";
  }, 8000);
}

formElement.addEventListener("submit", formSubmitted);
