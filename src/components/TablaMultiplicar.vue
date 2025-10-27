<template>
    <div>
        <h1>Tabla de multiplicar boton</h1>
        <label>Introduce el numero: </label>
        <input type="number" v-model="numero"/>
        <button @click="generarTabla()">Generar tabla</button>
        <table border="1">
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
        <br><hr><br>
        <h1>Tabla de multiplicar Computed</h1>
        <label>Introduce el numero: </label>
        <input type="number" v-model="numero3"/>
        <table border="1">
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="generarTablaComputed"></tbody>
        </table>
        <br><hr><br>
        <h1>Tabla de multiplicar Filters</h1>
        <label>Introduce el numero: </label>
        <input type="number" v-model="numero2"/>
        <table border="1">
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="num in 10" :key="num">
                    <td>{{$filters.getOperacion(this.numero2, num)}}</td>
                    <td>{{$filters.getResultado(this.numero2, num)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TablaMultiplicar",
         data(){
            return {
                numero: 0,
                html: "",
                numero2: 0,
                numero3: 0
            }
         },
         methods: {
            generarTabla(){
                var aux = "";
                for(var x=1; x<=10;x++){
                    aux += "<tr>"
                    aux += "<td>" + this.numero + " * " + x + "</td>";
                    aux += "<td>" + this.numero * x + "</td>";
                    aux += "</tr>"
                }

                this.html = aux;
            }
         },
         computed: {
            generarTablaComputed (){
                var aux = "";
                for(var x=1; x<=10;x++){
                    aux += "<tr>"
                    aux += "<td>" + this.numero3 + " * " + x + "</td>";
                    aux += "<td>" + this.numero3 * x + "</td>";
                    aux += "</tr>"
                }

                return aux;
            }
         }
    }
</script>