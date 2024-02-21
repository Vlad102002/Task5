let a = document.querySelectorAll('a');

a.forEach(elm => {
    elm.addEventListener('click', changeClass);
});

function changeClass() {
    a.forEach(elm => {
        if (elm.className == 'active') {
            elm.classList.remove('active')
        }
    })
    this.className = 'active'
}

let ul = document.querySelector('.ulAtive')
a1.addEventListener('mouseover', function() {
    ul.style.display = 'flex'
})

ul.addEventListener('mouseover', function() {
    ul.style.display = 'flex'
})

ul.addEventListener('mouseout', function() {
    ul.style.display = 'none'
})

a1.addEventListener('mouseout', function() {
    ul.style.display = 'none'
})

