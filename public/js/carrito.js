let carro = document.getElementById('carro')

carro.addEventListener('click', _ => {
    console.log('entre al click')
    document.getElementById("sidebar").classList.toggle("collapsed");
  })

  const sidebar = document.querySelector('#sidebar');
    const close = document.querySelector('#closer').addEventListener('click', function(){
        sidebar.classList.toggle("collapsed")
    })