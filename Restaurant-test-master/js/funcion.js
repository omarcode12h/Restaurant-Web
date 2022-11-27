import {restaurantes} from './data.js'

const d = document,
$inputSearch = d.getElementById('inputSearchId'),
$btnSearch = d.getElementById('searchId'),
$container = d.getElementById('conatinerId');


function search(){
    
   $btnSearch.addEventListener('click', (e) => {

    let flag = false;

    restaurantes.forEach( el => {

        if(el.titulo === $inputSearch.value) {
             flag = true;

           $container.innerHTML = `
           <div class="galeria">
            <div class="foto">
                <img src="${el.imagen}" alt="imagen.2">
            </div>
            <div class="pie">
                <p>${el.titulo}</p>
                <p>${el.ubicacion}</p>
                <p>${el.descripcion}</p>
            </div>
          </div> 
           
           `
    
        }
    });

    if(!flag){
        $container.innerHTML = `
        <p>No se encontro</p>
        
        `
    }

   })

}

search()


