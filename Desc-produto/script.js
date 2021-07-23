let slideBarItems = document.querySelectorAll('nav div a');

slideBarItems.forEach(button => {
  button.addEventListener('click', function () {
    slideBarItems.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

let itemDescription = document.getElementsByClassName('item-description');

[...itemDescription].forEach((element) => {
  let text = element.textContent.substring(0, 20);
  element.textContent = text + '...';
});

let itemInformation = document.getElementsByClassName('item-information');

[...itemInformation].forEach((element) => {
  if (element.textContent.length > 10) {
    let text = element.textContent.substring(0, 10);
    element.textContent = text + '...';
  }

});