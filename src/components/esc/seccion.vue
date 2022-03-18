<template>
  <div class="seccion">
  <!-- Example single danger button -->

    <body>
        <div class="alquiler" >
        <h1>CARS FOR YOU </h1>
        <p>Coches de segunda mano, nuevos y Km0 en nuestra gama de vehículos de alta gama.</p>
        <div class="marcas">
            <div class="mar" v-for="marca in marcaList"  :key="marca.cifm" >

                  <router-link Class="mascar" :to="{name: 'marca', params: {cifm: marca.cifm}}">
                    <div class="namecar"> {{marca.nombre}} </div> 
                  </router-link> 

            </div>      
        </div>
        
        </div>

          <div class="car" v-for="car in carList" :key="car.codcoche" :car="car" >

            <router-link Class="mascar" :to="{name: 'Detalles', params: {codcoche: car.codcoche }}">
              <div class="namecar"> <img :src="car.imagen" alt=""></div>
              <nav class="info" > <p v-if="marca" > {{marca.nombre}} </p>  {{car.nombre}} </nav> 
              <nav class="precio" >  {{car.precio}}€ </nav>  
              <nav class="ano" > • {{car.Ano}} • {{car.Kilometros}} Km </nav>  
               
            </router-link>
            <button @click="deleteAndUpdateCache(car.codcoche)">Borrar</button>

          </div>
          <foter />
    </body>
  </div> 

</template>
  
<script>
// @ is an alias to /src
import seccion from '@/components/esc/seccion.vue'
/*****************************/ 
import { useQuery, useResult, useMutation   } from '@vue/apollo-composable';
import { ref } from 'vue'
// import carListQuery from '../../graphql/car.query.gql'
import { carListQuery }from "../../graphql/carList";
import gql from "graphql-tag";
// import marcaListQuery from '../../graphql/marca.query.gql';
import { marcaListQuery } from "../../graphql/marca";
// import deletecar from '../../graphql/borrarcar.query.gql';
// import gql from 'graphql-tag'
export default {
  name: 'Home',
  components: {  
    seccion, 
    
  },
  props: ["codcoche"],
  props: ["cifm"],
  setup() {
    //const message = ref('hola mohamed')
    const { result } = useQuery(carListQuery)
    const carList = useResult(result, null,  data => data.carList)
    const { result: resultz } = useQuery(marcaListQuery)
    const marcaList = useResult(resultz, null,  data => data.marcaList)
    console.log(result, resultz )
    // el deletecar 
    const { mutate: Mutation } = useMutation(gql`
            mutation Mutation($codcoche: ID!) {
                    deletecar(codcoche: $codcoche) {
                      message
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
                        marchas
                      }
                    }
                  }`)
    function deleteAndUpdateCache(codcoche) {
      
      Mutation({ codcoche }, {
      update: (store, {}) => {
        const data = store.readQuery({query: carListQuery})
        const updatedData = data.carList.filter(w => w.codcoche !== codcoche)
        store.writeQuery({query: carListQuery, data: { carList: updatedData}})
      }
    });
    }
   return {  carList, marcaList,deleteAndUpdateCache }
  },
        
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
/**************************** SELECT COCHES ******************************* */
div .marcas  {
      height: 30% ;
      /* background: blue ; */
      text-align: center;
      width: 100%;
      padding-left: 25px;
}
div .mar {
    padding: 5px;
    padding-right: 10px;
    /* background: yellow ; */
    margin: 5px;
    border: 1px solid #ccc;
    border-radius:10px;
    float: left;
    width: 10%;
    height: auto;
}
div .mar a {
  color:black;
  text-decoration: none;
  }
/*************************** LOS DATOS DE COCHES ********************************** */
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
/* .contenedor:hover .imagen {-webkit-transform:scale(1.3);transform:scale(1.3);}
.contenedor {overflow:hidden;} */
 /*
div .car:hover {
  -webkit-transform:scale(1.5);transform:scale(1.5); */
    /* border: 1px solid #777;
    border-radius: 10px; 
     backface-visibility: hidden;
        transform: scale(1.15, 1.15);
        opacity: 1
}*/
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
.alquiler {
 width: 100%;
  height: 200px;
}
div h1 {
	color: black;
  margin: 0;
  font-size: 400%;
  text-align: center;
  line-height: 1;
  padding-top: calc(20vh - 90pt);
  display: block;
  font-weight: 700;
}
div p {
	color: grid;
  margin: 0;
  padding-top: 10px ;
  padding-bottom: 15px;
  font-size: 20px;
  text-align: center;
  line-height: 1;
  display: block;
  font-weight: 700;
}
/****************************************************************** */
</style >