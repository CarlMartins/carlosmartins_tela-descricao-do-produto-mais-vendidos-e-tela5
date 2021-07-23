let navBarItem = document.querySelectorAll('footer nav div');

navBarItem.forEach(item => {
  item.addEventListener('click', function () {
    navBarItem.forEach(it => it.classList.remove('active'));
    this.classList.add('active');
  });
});