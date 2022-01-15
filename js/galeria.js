//galeria
$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'tudo') {
            $('.boxItens').show('1000');
        }else {
            $('.boxItens').not('.' + value).hide('1000');
            $('.boxItens').filter('.' + value).show('1000');
        }
    })
    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
//foto perfil
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