let invoice = {
    nome: "GoldenN9",
    idade: 24,
    tipo: {
        0: ["Guerreiro", "Espada"],
        1: ["Mago", "Magia"],
        2: ["Monge", "Artes Marciais"],
        3: ["Ninja", "Shuriken"]  
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){

    for(let index in invoice.tipo){
            let [classe, ataque] = invoice.tipo[index]
                console.log(`O ${classe} usou ${ataque}`)
    }
}