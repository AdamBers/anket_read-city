window.onclick = event => {


    /////////////////////BG color change
    const backgroundColor = event.target.style.backgroundColor;
    if (backgroundColor === '' && event.target.classList.contains("answer")) {
        event.target.style.backgroundColor = '#2283C7';
        event.target.style.color = '#fff';
        event.target.style.borderColor = '#fff';

    }
    if (backgroundColor !== '' && event.target.classList.contains("answer")) {
        event.target.style.backgroundColor = '';
        event.target.style.color = '#2283C7';
        event.target.style.borderColor = '#2283C7';
    }



    if (backgroundColor !== '' && event.target.classList.contains("sub_answer")) {
        event.target.style.backgroundColor = 'rgb(34, 131, 199)';
        event.target.style.color = '';

    }
    if ((backgroundColor === '' || backgroundColor === 'rgb(34, 131, 199)') && event.target.classList.contains("sub_answer")) {
        event.target.style.backgroundColor = '#fff';
        event.target.style.color = '#2283C7';

    }

    ////////////////////////Show hide elements
    // if (event.target.className = 'answer-name') {
    //     event.target.className = 'answer'
    // }



}


function checkRange(event) {
    if (event.target.value >= 6) {
        document.getElementById("fourth-question").style.display = "none";
    }
    if (event.target.value <= 5) {
        document.getElementById("fourth-question").style.display = "block";
    }
}