const formTutor = document.querySelector('.form-tutor')
const formProc = document.querySelector('.form-sel-pet')


formTutor.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(formTutor)
    const json = Object.fromEntries(formData)

    const pet = JSON.parse(localStorage.getItem('pets')) ?? {}

    // pegando todos que contenham o cpf igual ao do cliente

    const pets = Object.values(pet).filter(p => p.cpf === json.cpftutor)

    if (pets.length === 0) {
        alert('Cliente/pets não cadastrado')
        return
    }

    const select = document.querySelector('.sel-pet')
    
    pets.forEach(p => {
        const option = document.createElement('option')
        option.value = p['codigo-pet']
        option.textContent = `${p['codigo-pet']} ${p['nome-pet']}`
        select.appendChild(option)
    })

})

formProc.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(formProc)

    const json = Object.fromEntries(formData)

    const pet = JSON.parse(localStorage.getItem('pets')) ?? {}
    
    console.log(pet[json['sel-pet']])
    console.log(json)
    // consultas: procedimentos+informações do pet
    const consultas = JSON.parse(localStorage.getItem('consultas')) ?? {}

    // adicionando a nova consulta
    consultas[json['sel-pet']] = json

    localStorage.setItem('consultas', JSON.stringify(consultas))

    alert('Consulta cadastrada com sucesso')
}
)