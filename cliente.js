const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const json = Object.fromEntries(formData)

    const clientes = JSON.parse(localStorage.getItem('clientes')) ?? {}

    const chave = json.cpf.replace('.', '')
        .replace('.', '')
        .replace('-', '')
        
    clientes[chave] = json

    localStorage.setItem('clientes', JSON.stringify(clientes))
    console.log(localStorage.getItem('clientes'))
    form.reset()
})