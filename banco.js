function Banco(conta, saldo, tipo, agencia){
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;

Buscar_Saldo = function saldo_total(){
    console.log("Saldo: ", this.saldo)
}
Deposito = function depositar(valor){
    this.saldo += valor;
}
Saque = function sacar(valor){
    this.saldo = this.saldo - valor;
}
infor = function dados(){
    console.log("Conta:", this.conta, "Agencia:", this.agencia )
}
}