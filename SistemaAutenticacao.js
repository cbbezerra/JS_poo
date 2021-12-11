/*
Ser autenticável significa ter o metodo autenticar
*/


export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenicavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;        
    }

    static ehAutenicavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }

}