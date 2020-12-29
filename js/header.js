var BtnMenu = document.querySelector('.btn-menu-mobile').style
var menuList = document.querySelector('nav.menu-mobile')
var menuAside = document.querySelector('nav.menu-mobile-aside')
var metadeTela = document.querySelector('.metade-tela-aside')

function trocaImagemMenu(img) {
    BtnMenu.backgroundImage = 'url(' + img + ')'
}

function abreMenuEescolheTipo(tipo) { //exemplo         <div onclick="abreMenuEescolheTipo('aside')" class="btn-menu-mobile"></div>
    if (tipo == 'menuList') {
        if (menuList.style.display == 'block') {
            menuList.style.display = 'none'
            return
        } else {
            menuList.style.display = 'block'
            return
        }
    }

    if (tipo == 'aside') {
        if (menuAside.style.display == 'block') {
            menuAside.style.display = 'none'

            return
        } else {
            menuAside.style.display = 'block'
            metadeTela.style.display = 'block'
            return
        }
    }

}

function fecharMenu() {
    metadeTela.style.display = 'none'
    menuAside.style.display = 'none'
}