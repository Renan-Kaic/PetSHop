const documento = document

let iframeAtual = null

function ocultarBtn(item) {
    const colapse = documento.querySelector(item)
    const display = colapse.style.display

    if (display === '' || display === 'none') {
        colapse.style.display = 'block'

    } else {
        colapse.style.display = 'none'
    }
}

function ocultarIframe(item) {
    const itm = documento.querySelector(item)
    const display = itm.style.display

    if (iframeAtual !== item && iframeAtual !== null) {
        documento.querySelector(iframeAtual).style.display = 'none'
    }

    if (display === '' || display === 'none') {
        itm.style.display = 'block'
        iframeAtual = item
    }
}

documento.addEventListener('click', {
    handleEvent: function (event) {
        const target = event.target
        const classList = target.classList.value

        if (classList.includes('btn-home')) {
            ocultarBtn('.colapse-home')
        }
        else if (classList.includes('btn-dashboard')) {
            ocultarBtn('.colapse-dashboard')
        }


        else if (classList.includes('btn-item-cadCliente')) {
            ocultarIframe('.iframe-cliente')
        }
        else if (classList.includes('btn-item-cadPet')) {
            ocultarIframe('.iframe-pet')
        }
        else if (classList.includes('btn-item-proced')) {
            ocultarIframe('.iframe-proced')
        }
    }
}) 