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