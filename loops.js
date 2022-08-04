let estados = ['Ceará','Goiás','Paraíba', 'Sergipe', 'São paulo']


// o objeto estadosé um Array, desta forma ele possui um atributo chamando length (tamanho), desta forma ele passa para a função forEach, que sabe que vai passar por cada elemento até o ultimo, acessado atravez da propriedade length.

estados.forEach((estado, indice, array) => console.log(estado, indice, array))




let estados = { lista: ['Ceará','Goiás','Paraíba', 'Sergipe', 'São paulo']
}

estados.lista.forEach((estado, indice, array) => console.log(estado, indice, array))
