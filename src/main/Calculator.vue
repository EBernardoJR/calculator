<template>
  <div class="calculator">
      <Display :value="displayValue" />
       <Button label="AC" triple @onClick="clearMemory" />
        <Button label="/" operation @onClick="setOperation" />
        <Button label="7" @onClick="addDigit" />
        <Button label="8" @onClick="addDigit" />
        <Button label="9" @onClick="addDigit" />
        <Button label="*" operation @onClick="setOperation" />
        <Button label="4" @onClick="addDigit" />
        <Button label="5" @onClick="addDigit" />
        <Button label="6" @onClick="addDigit" />
        <Button label="-" operation @onClick="setOperation" />
        <Button label="1" @onClick="addDigit" />
        <Button label="2" @onClick="addDigit" />
        <Button label="3" @onClick="addDigit" />
        <Button label="+" operation @onClick="setOperation" />
        <Button label="0" double @onClick="addDigit" />
        <Button label="." @onClick="addDigit" />
        <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
//importando os outros componentes
import Button from '../components/Button'
import Display from '../components/Display'

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],// os dois valores para fazer as operações
            current: 0
        }
    },

//registrar os components
    components: {Button, Display},
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())// o primeiro parametro vai dzr qual variavel vai ser alterada, e o segundo vai altera-la como valor inicial
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation
                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch (e) {
                    this.$emit('onError', e)
                }
                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) {// se o display ja tiver o ponto, vai retornar a função sem fazerr outra alteração
                return
            }
            const clearDisplay = this.displayValue === "0" //vai limpar o display quando o valor do display for 0 oui quando  variavel clearDisplay estiver TRUE (inicialmente ela ta como FALSE)
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n
            this.displayValue = displayValue
            this.clearDisplay = false
            
            // Alternativa 1
            this.values[this.current] = displayValue
            
            // Alternativa 2
            // if (n !== ".") {
            //     const i = this.current
            //     const newValue = parseFloat(displayValue)
            //     this.values[i] = newValue
            // }
        }
    }
}

</script>

<style>
.calculator{
    height: 320px;
    width: 240px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4 25%);/*vai ter 4 colunas, com cada uma ocupando 25%*/
    grid-template-rows: 1fr 48px 48px 48px 48px;
}
</style>