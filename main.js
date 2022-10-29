
const slider = document.getElementById('slider');
const selector = document.querySelector('#selector .selectBtn');
const progres = document.querySelector('#progressBar');
const price = document.querySelector('#price');
const btn = document.querySelector('#test');


let state = false;
btn.addEventListener('click', () => {
    state = !state
    if (state) {
        price.innerHTML = `$ ${slider.value * 12 - (slider.value * 3)}.00`
    } else {
        price.innerHTML = `$ ${slider.value}.00`
    }
})


slider.oninput = function () {
    selector.style.left = (this.value / 32) * 680 + "%"
    progres.style.width = (this.value / 32) * 100 + "%"
    if (state) {
        price.innerHTML = `$ ${slider.value * 12 - (slider.value * 3)}.00`
    } else {
        price.innerHTML = `$ ${slider.value}.00`
    }
}








