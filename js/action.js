//display menu
let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
    list.forEach((item) => 
    item.addEventListener('mouseover', activeLink ));

//display menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('main');

toggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
    main.classList.toggle('show');
});

//imagens produto
let foto = document.getElementById('imgFoto');
let file = document.getElementById('flImage');
foto.addEventListener('click', function() {
    file.click();
});
file.addEventListener('change', function() {
    let ler = new FileReader();
    ler.onload = function() {
        foto.src = ler.result;
    }
    ler.readAsDataURL(file.files[0]);
});