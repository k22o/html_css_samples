jqOnly = {
    init: function() {

        const acds = document.querySelectorAll('.acd2')

        for (let i=0; i<acds.length; i++) {
            acds[i].addEventListener('click', () => {
                acds[i].classList.toggle('open');
            }, false)    
        }
    }
}

jqOnly.init()



