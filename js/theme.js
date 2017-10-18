let toggle = document.querySelector('.c-toggle-theme');

toggle.addEventListener('click', function(e) {
e.preventDefault();

if(document.body.classList.contains('theme-blue')){
   document.body.classList.remove('theme-blue');
   document.body.classList.remove('theme-blue__svg');
}

else {
  document.body.classList.add('theme-blue');
  document.body.classList.add('theme-blue__svg');
}


});
