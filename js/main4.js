
const mostrar = document.querySelector('.mostrar');
var btnContainer = document.getElementById("pagination");
var btns = btnContainer.getElementsByClassName("pagn");


for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    });
}

cargaInfo(1);

function cargaInfo(pag) {
    limpiarHtml();

    fetch('../js/superbordados.json')
        .then(respuesta => respuesta.json())
        .then(parches => {
            var pagination;
            switch (pag) {
                case 1:
                    pagination = parches.slice(0, 21);
                    break;
                case 2:
                    pagination = parches.slice(21, 42);
                    break;
                case 3:
                    pagination = parches.slice(42, 63);
                    break;
                case 4:
                    pagination = parches.slice(63, 84);
                    break;
                default:
                    pagination = parches.slice(0, 21);
                    break;
                    
            }
        imprimirHtml(pagination);
            
    })
}

function limpiarHtml() {
    mostrar.innerHTML = "";
}

function imprimirHtml(pagination) {
    for (let i=0; i < 21; i++){
        const d = document.createElement('div');
        d.innerHTML = `
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="${pagination[i].img}"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">${pagination[i].nombre}</p>
                    <p class="text-xl text-gray-700 font-bold mb-2">$${pagination[i].precio}</p>
                </div>
            </div>
        `
        mostrar.appendChild(d);
    }
}

