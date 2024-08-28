export function guardarLogin(login, senha){
    localStorage.setItem('user', login),
    localStorage.setItem('password', senha)
}

export function logout(){
    localStorage.setItem('user', null),
    localStorage.setItem('password', null)
    localStorage.setItem("carros", JSON.stringify([]))
}

export function getUser(){
    return localStorage.getItem('user')
}

export function getPassword(){
    return localStorage.getItem('password')
}

export function guardarCarro(carro) {
    let carros = JSON.parse(localStorage.getItem("carros")) || [];

    const carroJaAdicionado = carros.some(c => c.id === carro.id);

    if (carroJaAdicionado) {
        return alert('Carro já adicionado');
    }

    if (carros.length >= 3) {
        return alert('O limite de carros no comparador é 3');
    }

    carros.push(carro);

    localStorage.setItem("carros", JSON.stringify(carros));
}



export function getCarros(){
    return JSON.parse(localStorage.getItem("carros"))
}

export function guardarCarros(carros){
    localStorage.setItem("carros", JSON.stringify(carros));
}

export function getcarros(){
    return JSON.parse(localStorage.getItem("carros"))
}

export function guardarDetalheCarro(carro){
    return localStorage.setItem("carroDetalhe", JSON.stringify(carro));
}

export function getDetalheCarro(){
    return JSON.parse(localStorage.getItem("carroDetalhe"))
}