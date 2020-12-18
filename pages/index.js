let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close');
editButton.onclick = function() {
     console.log('Попап включен!');
     popup.classList.add('popup_opened');
    };
popupClose.onclick = function() {
    console.log('попап выключен!');
    popup.classList.remove('popup_opened');
    };

let nameInput = document.querySelector('.form__nameinput');
let jobInput = document.querySelector('.form__jobinput');
let button = document.querySelector('.form__button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
button.onclick = function() {
    console.log('кнопку нажали!');
    console.log(nameInput.value);
    let innerNameValue = nameInput.value;
    profileName.innerHTML = innerNameValue;
    let innerDescriptionValue = jobInput.value;
    profileDescription.innerHTML = innerDescriptionValue;
    popup.classList.remove('popup_opened');
};
