//  console.log(1234)
let popupAddCard = document.getElementById('addcard');
let closeCard = document.getElementById('closecard');
let profileButton = document.querySelector('.profile__button');
let popupFormNameInputCard = document.getElementById('popup__form-nameinput-card');
let popupFormLink = document.getElementById('popup__form-link');
let formCard = document.getElementById('form-card');
let elementImage = document.querySelector('.element__image');



let elementThashIcon = document.querySelectorAll('.element__trash-icon');

profileButton.addEventListener('click', function (){
popupAddCard.classList.add('popup_opened');
});

closeCard.addEventListener('click', function() {
    popupAddCard.classList.remove('popup_opened');
});

function hadleCardSubmit (evt) {
    evt.preventDefault();
    let name = document.getElementById("popup__form-nameinput-card").value;
    let link = document.getElementById("popup__form-link").value;

    addCard({name: name, link: link });
    popupAddCard.classList.remove('popup_opened');
    
};

formCard.addEventListener('submit', hadleCardSubmit);


  