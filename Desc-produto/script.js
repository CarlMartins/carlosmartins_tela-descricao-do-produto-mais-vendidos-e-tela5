let slideBarItems = document.querySelectorAll('nav div a');

slideBarItems.forEach(button => {
  button.addEventListener('click', function () {
    slideBarItems.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
