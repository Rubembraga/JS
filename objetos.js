const Evento = {
    local: 'recife',
    dia: 'sábado',
    produtos: 'contrato'
}

let materiais = ['musicos', 'ambiente', 'bebidas', 'comidas']

console.log('Dados do Evento: ')

for (let prop in Evento) {
    console.log(prop + ': ' + Evento[prop])
}

console.log('Produtos escolhidos: ')

for (let prod of materiais) {
    console.log(prod)
}