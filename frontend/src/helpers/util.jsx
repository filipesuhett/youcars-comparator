export function guardarLogin(login, senha){
    localStorage.setItem('user', login),
    localStorage.setItem('password', senha)
}

export function logout(){
    localStorage.setItem('user', null),
    localStorage.setItem('password', null)
}

export function getUser(){
    return localStorage.getItem('user')
}

export function getPassword(){
    return localStorage.getItem('password')
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