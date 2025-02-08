// to select multiple elements select for using querySelectorAll


const Listitems = document.querySelectorAll(`.collection-item`);

  Listitems.forEach(function(element){
    element.style.backgroundColor = `orange`;
    element.style.color = `white`;

  })
  