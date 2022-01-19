
const mostrar = document.querySelector('.mostrar');

function cargaInfo() {
    fetch('../js/super.json')
    .then(respuesta => respuesta.json())
        .then(bordados => {
            bordados.forEach(bordado => {
                const d = document.createElement('div');
                d.innerHTML = `
                <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-md">
                    <div>
                        <img class="object-center object-cover h-auto w-full"
                            src="${bordado.img}"
                            alt="photo">
                    </div>
                    <div class="text-center py-8 sm:py-6">
                        <p class="text-xl text-gray-700 font-bold mb-2">${bordado.nombre}</p>
                        <p class="text-xl text-gray-700 font-bold mb-2">${bordado.precio}</p>
                    </div>
                </div>
                `
                mostrar.appendChild(d);
            });
    })
}
cargaInfo();