const cookiePopup = document.getElementById('cookie-popup');
const acceptCookiesButton = document.getElementById('accept-cookies');
const declineCookiesButton = document.getElementById('decline-cookies');


acceptCookiesButton.addEventListener('click', () => {
    localStorage.setItem('accepted', 'true');
    cookiePopup.classList.add('d-none');
});

declineCookiesButton.addEventListener('click', () => {
    localStorage.setItem('denied', 'true');
    cookiePopup.classList.add('d-none');
});
