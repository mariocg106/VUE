<template>


  <div class="ma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined"  >


    <header>
  		<h1>EMVcoches</h1>
 		  <nav>
            <router-link to="/">Home</router-link>
            <router-link Class="mascar" to="/oferta">+ ADD NEW CAR</router-link>
  		</nav>
      <router-view />
	</header>
	 <section>   




         <div class="car" v-for="marca in result.marcaId.datamar.carpormarca" :key="marca.cifm"  >

              <router-link Class="mascar" :to="{name: 'Detalles', params: {codcoche: marca.codcoche}}">
              <div class="namecar"> <img :src="marca.imagen" alt=""></div>
              <nav class="info" > {{marca.nombre}} </nav> 
              <nav class="precio" >  {{marca.precio}}€ </nav>  
              <nav class="ano" > • {{marca.Ano}} • {{marca.Kilometros}} Km </nav>   
              </router-link>

          

          </div> 
  	</section>


  </div> 

</template>



<script >

import marca from "@/components/marca";
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

 //import { showmarca}from "../graphql/showmarca";


export default {
  name: "marca",
  components: {
    marca,
    
  },
    props: ["codcoche"],



  props: ["cifm"],

  setup(props) {
    const { result } = useQuery( gql`
      query MarcaId($cifm: ID!) {
        marcaId(cifm: $cifm) {
          datamar {
            cifm
            nombre
            carpormarca {
              codcoche
              nombre
              modelo
              precio
              Combustible
              descripcion
              Ano
              Kilometros
              imagen
              marchas
            }
          }
        }
      }`,
     () => ({ cifm: props.cifm }) );
    console.log(result);
    return {
      result
    };
  },
};
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
/********************************************************************************** */

nav {
  padding-right: 70px;
}
nav .mascar {
  border :  1px solid rgba(233, 35, 35, 0.933);
  border-radius: 7px ;
  background:  rgba(233, 35, 35, 0.933);
 padding-left: 20px;
 padding-right: 20px;
  /* -moz-opacity:.50;opacity:.90; */
}


nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  padding: 0 100px;
  color: white;
}





div.namecar img {
    width: 100%;
    height: 540px;
}



header {
    overflow: hidden;
    /* position: fixed; */

   background: black;
  
  width: 100%;
  padding: 1em;
  font-size: 140%;
  /* position: absolute; */
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
/***************************************************************************************** */

section {
  width: 100%;
  height: 50vh;
  background-size: 100%;
  background-position: 0;
  /*top: 100vh;*/
 
}
div .car {
    margin: 5px;
    border: 1px solid #ccc;
    border-radius:10px;
    float: left;
    width: 32.5%;
    height: auto;
    
}

div .car a {
  color:black;
  text-decoration: none;

  }
div .info {
    font-size: 20pt;
    padding-left: 10px;
    float: left;
    font-weight: bold;  
    margin-bottom: 30px;
}

div .precio {
        font-weight: bold;  
    font-size: 20pt;
    padding-left: 70%;
        
}
div .ano {
    font-size: 15pt;
    float: right;
    padding-right: 10px ;
    
}


div.namecar img {
    border-radius:  10px 10px 0px 0px ;
    overflow:hidden;
    backface-visibility: hidden;
    width: 100%;
    height: 350px;
}
div.namecar img:hover {
     backface-visibility: hidden;
        transform: scale(1.03,1.03);
        opacity: 2
}




@media (min-width: 500px) {
  header {
    text-align: left;
  }
  nav {
    float: right;
  }
 
}


/* And here's the magic! EQCSS.js required */

/* @element html, body and (min-scroll-y: 100vh) {
  header {
    position: fixed;
    top: 0;
    background: white;
    box-shadow: rgba(0,0,0,.05) 0 3px 15px;
  }
} */

</style >