<template>
 <div class="home">
  
    <navigacion />
    <Cabecera />
    <seccion />
    <foter /> 
    
    

 </div>
       
</template>


<script>
// @ is an alias to /src

import  navigacion from '@/components/esc/navigacion.vue'
import Cabecera from '@/components/esc/Cabecera.vue'
import seccion from '@/components/esc/seccion.vue'
import foter from '@/components/esc/foter.vue'


/*****************************/ 

export default {
  name: 'Home',
  components: {  
    Cabecera, 
    seccion, 
    navigacion,
    foter
  }
  
  
}
  
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>