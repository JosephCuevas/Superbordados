

const mostrar = document.querySelector('.mostrar');


function cargaInfo(pag) {

    fetch('../js/superbordados.json')
        .then(respuesta => respuesta.json())
        .then(parches => {
            var posI, posF;
            if (pag == 1) {
                posI = 0;
                posF = 22;
            } else if (pag == 2) {
                posI = 23;
                posF = 44;
            }
            for (posI; posI < posF; posI++){
                console.log(parches.slice(2,5));
                console.log(posI);
                const d = document.createElement('div');
                d.innerHTML = `
                    <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
                        <div>
                            <img class="object-center object-cover h-auto w-full"
                                src="${parches[posI].img}"
                                alt="photo">
                        </div>
                        <div class="text-center py-8 sm:py-6">
                            <p class="text-xl text-gray-700 font-bold mb-2">${parches[posI].nombre}</p>
                            <p class="text-xl text-gray-700 font-bold mb-2">$${parches[posI].precio}</p>
                        </div>
                    </div>
                `
                mostrar.appendChild(d);
            }
    })
}
