<template>
    <div>
        <h1>Collatz</h1>
        <label>Introduzca el numero: </label>
        <input type="number" v-model="numero"/>
        <button @click="metodoCollatz()">Hacer Collatz</button>
        <ul>
            <li v-for="num in arrayCollatz" :key="num" v-html="$filters.parimpar(num)"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CollatzComponent",
        data(){
            return {
                numero: 0,
                arrayCollatz: []
            }
        },
        methods: {
            metodoCollatz(){
                //Es muy aconsejable trabajar en los metodos con variables auxiliares, y no hacerlo directamente con data()
                var aux = [];
                var elNumero = this.numero;
                while(elNumero != 1){
                    if(elNumero % 2 == 0){
                        elNumero = elNumero / 2;
                    } else {
                        elNumero = (elNumero * 3) + 1;
                    }
                    aux.push(elNumero);
                    this.arrayCollatz = aux;
                }
            }
        }
    }
</script>