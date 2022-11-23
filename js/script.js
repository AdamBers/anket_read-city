// var rangeSlider = document.getElementById("rs-range-line");
// var rangeBullet = document.getElementById("rs-bullet");

// rangeSlider.addEventListener("input", showSliderValue, false);

// function showSliderValue() {
//   rangeBullet.innerHTML = rangeSlider.value;
//   var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 578) + "px";
// }


window.onclick = e => {
    if (e.target.style.backgroundColor === "#fff" ) {
        e.target.style.backgroundColor = "#2283C7";
        e.target.style.color = "#fff";
        console.log(e.target.className)
    }
} 