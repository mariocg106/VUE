<template>
<div class="oferta">


<div class="header">
	<header>
  		<h1>EMVcoches</h1>
 		 <nav>
            <router-link to="/">Home</router-link>
  		</nav>
	</header>
</div>

 <div class="cardata">
 <h1>Car Data</h1>
              <form class="row g-3">

              <div class="col-md-8">
              <label for="inputCombustible" class="form-label">Marca</label>
              <select class="col-sm form-select " v-model="car.cifm"  id="cifm">
                     <option v-for="marca in marcaList"  :key="marca.cifm" v-bind:value="marca.cifm"  > {{marca.nombre}}</option>
              </select>
              </div>  
              <div class="col-md-8 " >
                <label for="inputNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" v-model="car.nombre" id="nombre">
              </div>
              <div class="col-md-8">
                <label for="inputAno" class="form-label">Año</label>
                <input type="Ano" class="form-control" v-model="car.Ano" id="Ano">
              </div>
              
              <div class="col-md-8">  
                <label for="inputmodelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" v-model="car.modelo" id="modelo">
              </div>
             
              <div class="col-md-8 ">
                <label for="inputKilometros" class="form-label">Kilometros</label>
                <input type="text" class="form-control" v-model="car.Kilometros" id="Kilometros">
              </div>
               <div class="col-md-8">
                <label for="inputPrecio" class="form-label">Precio</label>
                <input type="number" class="form-control" v-model="car.precio"  id="precio">
              </div>
               <div class="col-md-8">
                <label for="inputdescripcion" class="form-label">descripcion</label>
                <input type="text" class="form-control" v-model="car.descripcion" id="descripcion">
              </div>
              <div class="col-md-8">
              <label for="inputCombustible" class="form-label">Combustible</label>
              <select class="col-sm form-select "  v-model="car.Combustible"  id="Combustible" >
                    <option selected>Gasolina</option>
                            <option>Diesel</option>
              </select>
              </div>


                <div class="col-md-8">
                <label for="inputCombustible" class="form-label">Matricula</label>
                <input type="text" class="form-control" v-model="car.codcoche"   id="codcoche">
              </div>   
              <div class="col-12">
                <button @click="addcar()" >Publicar</button>
              </div>
            </form>
             </div>
            <foter />
</div>

</template>

<script>
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'
import { ref } from 'vue'
import { marcaListQuery } from "../graphql/marca";
import foter from './esc/foter.vue'


// import { addcar }from "../graphql/addcar";


export default {

  components: {
    foter
  },

  setup () {
    const car = {
      nombre:"",
      Ano:"",
      modelo:"",
      Kilometros:"",
      precio:"",
      Combustible: "",
      codcoche:"",
      cifm:"",
    }

    const { mutate: addcar } = useMutation(gql`
            mutation Mutation($car: carInput!) {
              addcar(car: $car) {
                datacar {
                  codcoche
                  nombre
                  modelo
                  precio
                  Combustible
                  descripcion
                  Ano
                  Kilometros
                  imagen
                }
              }
            }`,
            () => ({ variables: {
                    car: {
                          nombre: nombre.value,
                          Ano: Ano.value,
                          modelo: modelo.value,
                          Kilometros: Kilometros.value,
                          precio: precio.value,
                          Combustible: Combustible.value,
                          codcoche: codcoche.value,
                          cifm: cifm.value,
                          }                                       
                         },
             }))
             const { result } = useQuery(marcaListQuery)
              console.log(result)
  
            const marcaList = useResult(result, null,  data => data.marcaList)
            console.log(car);  
             return {
                car,
                addcar,
                marcaList

              }
        
    
  },


  /**************    LISTAR MARCA ******************* */

  //  setup() {
  //    const { res } = useQuery(MarcaListQuery)
  //      console.log(res)
  
  //      const MarcaList = useResult(res, null,  data => data.MarcaList)
  //      return {  MarcaList }

  
  //  },

        



}


</script>











<style scoped>
 

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
html {
  font-size: 10pt;
  line-height: 1.4;
  font-weight: 400;
  font-family: 'Source Sans Pro', 'Open Sans', Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Myriad Pro', 'Segoe UI', Myriad, Helvetica, 'Lucida Grande', 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  background: #eee;
}


header {
   background: black;
 
  width: 100%;
  padding: 1em;
  font-size: 140%;
  /*top: 100vh;*/
  left: 0;
  transition: opacity .2s ease-in-out;
  text-align: center;
}
header h1 {
  color: white;
  font-weight: 600px;
  display: inline;
  margin: 0;
  padding: 100px;
  font-size: inherit;
}

nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  opacity: .7;
  padding: 0 100px;
  color: white;
  transition: opacity .2s ease-in-out;
}
nav a:hover,
nav a:focus {
  opacity: 1;
  
}

@media (min-width: 500px) {
  header {
    text-align: left;
  }
  nav {
    float: right;
  }
 
}
/****************************************************/ 

div.cardata {
    width: 70%;
    color:black;
    padding-left: 5%;

}
 div.cardata h1 {
   text-align: left;
 }
 
  div.cardata label { 
    text-align: left;
    width: 20% ;
    /* background: gray ;
    border: 1px solid #ccc;
    border-radius: 7px; */
  }
  div.cardata input {
    width: 70% ;
    margin-left: 10%;
  }
  div.cardata select {
    width: 70% ;
    margin-left: 10%;
  }
 div.cardata div {
   display: flex;
   width: 80%;
 }



   div.cardata button { 
     margin-top: 5%;
    float: left;
    background:rgba(233, 35, 35, 0.933) ;
  }







/* And here's the magic! EQCSS.js required */

@element html, body and (min-scroll-y: 100vh) {
  header {
    position: fixed;
    top: 0;
    background: white;
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
  }
}

</style >