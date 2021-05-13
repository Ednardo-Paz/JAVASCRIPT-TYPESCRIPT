
//Função construtora
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, `cpfLimpo`, {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, ``);
        }
    })
}
//Metodo valida no prototype.
ValidaCPF.prototype.valida = function(){
    //se cpf não existir
    if(typeof this.cpfLimpo === `undefined`) return false;
    //se não tiver 11 números
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    let cpfParcial = this.cpfLimpo.slice(0, -2); 
    let digito1 = this.criaDigito(cpfParcial);
    let digito2 = this.criaDigito(cpfParcial + digito1);

    let novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};
//recebe os 9 ou 10 primiros números
ValidaCPF.prototype.criaDigito = function(cpfParcial){
    let cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? `0` : String( digito);
};
ValidaCPF.prototype.isSequencia = function(){
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo; 
}

//objeto
const cpf = new ValidaCPF(`705.484.450-52`);

console.log(cpf.valida())
