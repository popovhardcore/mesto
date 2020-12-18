let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
editButton.onclick = function() {
     popup.classList.add('popup_opened');
    };
popupClose.onclick = function() {
    popup.classList.remove('popup_opened');
    };

// let nameInput = document.querySelector('.form__nameinput');
// let jobInput = document.querySelector('.form__jobinput');
// let button = document.querySelector('.form__button');
// let profileName = document.querySelector('.profile__name');
// let profileDescription = document.querySelector('.profile__description');
// button.onclick = function() {
//     console.log('кнопку нажали!');
//     console.log(nameInput.value);
//     let innerNameValue = nameInput.value;
//     profileName.innerHTML = innerNameValue;
//     let innerDescriptionValue = jobInput.value;
//     profileDescription.innerHTML = innerDescriptionValue;
//     popup.classList.remove('popup_opened');
// };

let registryForm = document.querySelector('.form');
function formHandler(event) {
    event.preventDefault();
    let nameInput = document.querySelector('.form__nameinput');
    let jobInput = document.querySelector('.form__jobinput');
    let button = document.querySelector('.form__button');
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    let innerNameValue = nameInput.value;
    profileName.innerHTML = innerNameValue;

    let innerDescriptionValue = jobInput.value;
    profileDescription.innerHTML = innerDescriptionValue;

    popup.classList.remove('popup_opened');
}

registryForm.addEventListener('submit', formHandler); 