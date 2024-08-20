class Calculadora {
    // Método para somar dois números
    somar(a: number, b: number): number {
        return a + b;
    }

    // Método para subtrair dois números
    subtrair(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dois números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dois números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida!");
        }
        return a / b;
    }
}

// Exemplo de uso:
const calculadora = new Calculadora();

const resultadoSoma = calculadora.somar(5, 3);
const resultadoSubtracao = calculadora.subtrair(10, 4);
const resultadoMultiplicacao = calculadora.multiplicar(7, 6);
const resultadoDivisao = calculadora.dividir(20, 4);

console.log("Soma: " + resultadoSoma);
console.log("Subtração: " + resultadoSubtracao);
console.log("Multiplicação: " + resultadoMultiplicacao);
console.log("Divisão: " + resultadoDivisao);
