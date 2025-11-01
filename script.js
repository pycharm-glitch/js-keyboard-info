let mainText = document.getElementById('main-text');
let keyInfoDiv = document.querySelector('.key-code-info');
let h3Tag = document.getElementById('h3-tag');
let h1Tag = document.getElementById('h1-tag');
let cardEventKey = document.querySelector('.card');
let cardEventLocation = document.querySelector('.card2');
let cardEventCode = document.querySelector('.card3');
let keyEventH2 = document.getElementById('key-event-h2');
let locationEventH2 = document.getElementById('location-event-h2');
let codeEventH2 = document.getElementById('code-event-h2');
document.body.addEventListener('keydown', function (event) {
    event.preventDefault();
    mainText.style.display = 'none';
    if (h3Tag.innerHTML === '' && h1Tag.innerHTML === '') {
        h3Tag.innerHTML = `JavaScript Key Code ${event.keyCode}`;
        h1Tag.innerHTML = `${event.keyCode}`;
        cardEventKey.style.display = 'block';
        cardEventLocation.style.display = 'block';
        cardEventCode.style.display = 'block';
        keyEventH2.innerText = `${event.key}`;
        locationEventH2.innerText = `${event.location}`;
        codeEventH2.innerText = `${event.code}`;
    } else {
        h3Tag.innerHTML = '';
        h1Tag.innerHTML = '';
        h3Tag.innerHTML += `JavaScript Key Code ${event.keyCode}`;
        h1Tag.innerHTML += `${event.keyCode}`;
        cardEventKey.style.display = 'block';
        cardEventLocation.style.display = 'block';
        cardEventCode.style.display = 'block';
        keyEventH2.innerText = `${event.key}`;
        locationEventH2.innerText = `${event.location}`;
        codeEventH2.innerText = `${event.code}`;
    }
    keyInfoDiv.style.display = 'block';
})