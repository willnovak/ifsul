class Cadastro {

    constructor(name, password){
        this.name     = name;
        this.password = password;
    }

    getName(){
        return this.name;
    }

    getPassword(){
        return this.password;
    }

    setName(name){
        this.name = name;
    }

    setPassword(password){
        this.password = password;  
    }
}

class Administrador extends Cadastro {

    constructor(name, password, privilegy){
        super(name, password);
        this.privilegy = privilegy;
    }

    getPrivilegy(){
        return this.privilegy;
    }

    setPrivilegy(privilegy){
        this.privilegy = privilegy;
    }
}