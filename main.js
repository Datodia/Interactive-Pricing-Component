
const slider = document.getElementById('slider');
const selector = document.querySelector('#selector .selectBtn');
const progres = document.querySelector('#progressBar');
const price = document.querySelector('#price');
const btn = document.querySelector('#test');
const view = document.querySelector('#view');


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


    if (slider.value >= 2 && slider.value <= 10) {
        view.innerHTML = "10K PAGEVIEWS"
    } else if (slider.value >= 12 && slider.value <= 20) {
        view.innerHTML = "100K PAGEVIEWS"
    } else {
        view.innerHTML = "1M PAGEVIEWS"
    }
}








