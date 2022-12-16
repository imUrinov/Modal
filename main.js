const submitBtn = document.getElementById('submit')
const closeBtn = document.getElementById('close')
const thanks = document.querySelector('.thanksContainer')

submitBtn.addEventListener('click', function() {
    thanks.classList.add('thanksActive')
})

closeBtn.addEventListener('click', function() {
    thanks.classList.remove('thanksActive')
})