// Configurações da Navbar

var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if(showSidebar) {
        navigation_header.style.marginLeft = '-10vw';
        navigation_header.style.animationName = 'showSidebar'
        content.style.filter = blur(2);
    } else {
        navigation_header.style.marginLeft = '-100vw'
        navigation_header.style.animationName = ''
        content.style.filter = '';
    }
}

function closeSidebar() {
    if(showSidebar) {
        toogleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar){
        toogleSidebar();
    }
});

// Configurações de alteração de valores

function Alterar1() {
    event.preventDefault()

    let valor1 = document.getElementById('valor')
    let preco = document.getElementById('subtext1')

    preco.innerHTML = valor1.value
}

function Alterar2() {
    event.preventDefault()

    let valor2 = document.getElementById('valor2')
    let preco = document.getElementById('subtext2')

    preco.innerHTML = valor2.value
}

function Alterar3() {
    event.preventDefault()

    let valor3 = document.getElementById('valor3')
    let preco = document.getElementById('subtext3')

    preco.innerHTML = valor3.value
}