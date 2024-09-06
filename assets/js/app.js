
document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    if (!localStorage.getItem('cookiesConsent')) {
        cookiePopup.style.display = 'block';
    } else {
        cookiePopup.style.display = 'none';
    }
    acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesConsent', 'accepted');
        cookiePopup.style.display = 'none';
    });
    declineBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesConsent', 'denied');
        cookiePopup.style.display = 'none';
    });
});