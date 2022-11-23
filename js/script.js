window.onclick = event => {
    const backgroundColor = event.target.style.backgroundColor;
    if (backgroundColor === '' && event.target.classList.contains("answer")) {
        event.target.style.backgroundColor = '#2283C7';
        event.target.style.color = '#fff';
        event.target.style.borderColor = '#fff';

    } else {
        event.target.style.backgroundColor = '';
        event.target.style.color = '#2283C7';
        event.target.style.borderColor = '#fff';

    }
}


function checkRange(event) {
    if (event.target.value >= 6) {
        document.getElementById("fourth-question").style.display = "none";
    }
    if (event.target.value <= 5) {
        document.getElementById("fourth-question").style.display = "block";
    }
}