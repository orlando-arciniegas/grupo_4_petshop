window.onload = function() {
    let inputs = document.querySelectorAll('.detalles-cantidad input');
    let mas = document.getElementsByClassName('mas');
    let menos = document.getElementsByClassName('menos');

    for(let i=0; i < mas.length; i++)
    {
        menos[i].onclick = function() {
            if(inputs[i].value > 0) {
                inputs[i].value-- 
            } 
        }
        
        mas[i].onclick = function() {
            if(inputs[i].value < 15) {
                inputs[i].value++ 
            } 
        } 
    }
    
}