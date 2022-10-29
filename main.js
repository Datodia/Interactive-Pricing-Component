
const slider = document.getElementById('slider');
const selector = document.querySelector('#selector .selectBtn');
const progres = document.querySelector('#progressBar');

slider.oninput = function () {
    selector.style.left = (this.value / 32) * 680 + "%"
    progres.style.width = (this.value / 32) * 100 + "%"
}