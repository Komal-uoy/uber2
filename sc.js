//bar icon activate //
let barIcon = document.getElementById('bar-icon')

barIcon.addEventListener('click', function(e) {
document.querySelector('body').classList.toggle('mobile-nav-active');
this.classList.toggle('fa-xmark');
})

