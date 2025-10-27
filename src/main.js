import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)

app.config.globalProperties.$filters = {
    parimpar (numero) {
        if(numero % 2 == 0){
            return "<span style='color:green'>" + numero + "</span>";
        } else {
            return "<span style='color:red'>" + numero + "</span>";
        }
    },
    getOperacion(num, x){
        return num + " * " + x;
    },
    getResultado(num, x){
        return num * x;
    }
}

app.use(router).mount('#app')
