document.getElementById('headerBottomToggler').addEventListener('click', ()=>{
    if(screen.width < 992){
        document.querySelector('#header').classList.toggle("collapsed")
    }})