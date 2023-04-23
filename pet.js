const form = document.querySelector('.form-pet')
const formInfoPet = document.querySelector('.form-informacao-pet')
formInfoPet.style.display = 'none'

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const cpf = document.querySelector('.cpf-tutor')

    const pets = JSON.parse(localStorage.getItem('clientes')) ?? {}

    const chave = cpf.value.replace('.', '')
        .replace('.', '')
        .replace('-', '')
    
    const pet = pets[chave]

    if (!pet) {
        alert('cliente não cadastrado')
        return
    }

    form.style.display = 'none'
    formInfoPet.style.display = 'block'
    const informacoesTutor = document.querySelector('.informacao-tutor')
    
    informacoesTutor.querySelector('.nome-tutor').value = pet['nome'] + pet['Sobrenome']
    informacoesTutor.querySelector('.cpf-tutor').value = pet['cpf']
    informacoesTutor.querySelector('.telefone-tutor').value = pet['telefone']
    informacoesTutor.querySelector('.estado-tutor').value = pet['estado']
    informacoesTutor.querySelector('.cidade-tutor').value = pet['cidade']
    informacoesTutor.querySelector('.rua-tutor').value = pet['Rua']
    informacoesTutor.querySelector('.numero-tutor').value = pet['numero']
    
    const codigo = localStorage.getItem('ultimoCodigo')
    const cod = codigo ? parseInt(codigo) + 1 : 1
    localStorage.setItem('ultimoCodigo', cod)
    console.log(cod)
    formInfoPet.querySelector('.codigo-pet').value = cod

    informacoesTutor.style.display = 'block'
})

formInfoPet.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const pets = JSON.parse(localStorage.getItem('pets')) ?? {}

    const formData = new FormData(formInfoPet)

    const json = Object.fromEntries(formData)

    // adicionando o cpf do tutor ao objeto
    const cpf = document.querySelector('.cpf-tutor')
    json['cpf'] = cpf.value
    const chave = json['codigo-pet']
    pets[chave] = json

    localStorage.setItem('pets', JSON.stringify(pets))

    formInfoPet.reset()
    formInfoPet.style.display = 'none'
    document.querySelector('.informacao-tutor').style.display='none'
    form.style.display = 'block'
    form.reset()

    alert('Pet cadastrado com sucesso')
    
})