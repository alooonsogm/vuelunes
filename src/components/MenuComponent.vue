<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> |
            </li>
            <li>
                <router-link to="/collatz">Collatz</router-link> |
            </li>
            <li>
                <router-link to="/tablamultiplicar">Tabla Multiplicar</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    #menu li {
        display: inline;
    }
</style>