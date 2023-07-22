var header = document.getElementById('header');
    var navigationHeader = document.getElementById('navigation_header');
    var showSidebar = false;


    function toggleSidebar() {
        showSidebar = !showSidebar;
        if(showSidebar) {
            navigation_header.style.marginLeft = '-10vw';
            navigation_header.style.animationName = 'showSidebar'
            content.style.filter = 'blur(2)';
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

    const button = document.querySelector('input#cadastrar')
    const popup = document.querySelector('.popup-wrapper')
    const closeButton = document.querySelector('.popup-close')
    const nome = document.querySelector('#inome')
    const cpf = document.querySelector('#icpf')
    const nasc = document.querySelector('#nasc')
    const rg = document.querySelector('#irg')
    const tel = document.querySelector('#itel')
    const email = document.querySelector('#iemail')
    const end = document.querySelector('#iend')
    const user = document.querySelector('#iuser')
    const senha = document.querySelector('#ipass')
    const rm = document.querySelector('#irm')
    
    button.addEventListener('click', function() {
        if(nome.value == '' && cpf.value == '' && nasc.value == '' && rg.value == '' && tel.value == '' && email.value == '' && end.value == '' && user.value == '' && senha.value == '' && rm.value == '') {
            window.alert('preencha todos os campos!')
        } else {
        
        button.addEventListener('click', () => {
            popup.style.display = 'block'
        })
        
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none'
        })
    
        popup.addEventListener('click', () => {
            popup.style.display = 'none'
        }) 
    }
    })

   
