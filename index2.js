function superFuncia() {
    let n1 = +prompt("Введите первое число: ");
    let n2 = +prompt("Введите второе число: ");

    if (n1 > n2){
        fact = n1
    } else {
        fact = n2
    }

    function factorial(a) {
        return a ? a * factorial(--a) : 1
    }
    console.log(`Факториал наибольшего числа равен: ${factorial(fact)}`);

    function uslovie () {
        let znak = prompt("введите знак: ");  
    
        if (znak == '+') {
            res = n1 + n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(znak == '-') {
            res = n1 - n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(znak == '*') {
            res = n1 * n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else if(znak == '/') {
            res = n1 / n2
            console.log(`Равно: ${res}`);
            alert(`Равно: ${res}`)
        } else {
            let znak = prompt("введите знак заново: ");
            return uslovie() 
        }
    }
    uslovie()

    
}


superFuncia()