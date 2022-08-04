

// criação de funçao sem arrow function
/* let check = function (idade) {

    if (idade < 5) {
        console.log('compra o brinquedo')
    } else if (idade > 5) {
        console.log('compra sorvete')
    } else if (idade == 5) {
        console.log('colo da mamae')
    }
}
check(5)
 */

// criação de funçao com arrow function

let check = idade => {

    if (idade < 5) {
        console.log('compra o brinquedo')
    } else if (idade > 5) {
        console.log('compra sorvete')
    } else if (idade == 5) {
        console.log('colo da mamae')
    }
}
check(5)


