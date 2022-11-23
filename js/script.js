// var rangeSlider = document.getElementById("rs-range-line");
// var rangeBullet = document.getElementById("rs-bullet");

// rangeSlider.addEventListener("input", showSliderValue, false);

// function showSliderValue() {
//   rangeBullet.innerHTML = rangeSlider.value;
//   var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 578) + "px";
// }


// window.onclick = e => {
//     if (e.target.style.backgroundColor === "#fff" ) {
//         e.target.style.backgroundColor = "#2283C7";
//         e.target.style.color = "#fff";
//         console.log(e.target.className)
//     }
// } 




// var rangeInput = document.getElementById("rs-range-line");

// rangeInput.addEventListener('mouseup', function () {
//     if (this.value > 0 && this.value < 5) {
//         alert("First");
//     } else {
//         alert("Second");
//     }
// });


function checkRange(event) {
    if (event.target.value >= 6) {
        document.getElementById("fourth-question").style.display = "none";
    }
    if (event.target.value <= 5) {
        document.getElementById("fourth-question").style.display = "block";
    }
}