<template>
  <div class="header">

	<header >
  		<h1>EMVcoches</h1>
 		  <nav>
            <router-link to="/">Home</router-link>
            <router-link Class="mascar" to="/Oferta">+ ADD NEW CAR</router-link>
  		</nav>
      <router-view />
	</header>
	<section>   
 		 <span>NEW & USED</span>
  	</section>
  </div> 
  
</template>




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
/************************************************************************* */

nav {
  padding-right: 70px;
}
nav .mascar {
  border :  1px solid rgba(233, 35, 35, 0.933);
  border-radius: 7px ;
  background:  rgba(233, 35, 35, 0.933);
 padding-left: 20px;
 padding-right: 20px;
  -moz-opacity:.50;opacity:.90;


}

nav a {
  display: inline-block;
  outline: none;
  text-decoration: none;
  opacity: .8;
  padding: 0 100px;
  color: white;
  transition: opacity .2s ease-in-out;
}
nav a:hover,
nav a:focus {
  opacity: 15;
}


section {
  width: 100%;
  height: 80vh;
	background:  url('https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/bmw-individual-m6-modelle/bmw-individual-m6-modelle-m-xl.jpg.asset.1492532730547.jpg');
  background-size: 100%;
  background-position: 0;
}
section span {
	color: white;
  margin: 0;
  font-size: 400%;
  text-align: left;
  line-height: 1;
  padding-top: calc(50vh - 50pt);
  padding-left: 80PX;
  display: block;
  font-weight: 700;
}

/******************************************************/ 
header {

   background: black;
   filter:alpha(opacity=70);
  -moz-opacity:.80;opacity:.80;
  width: 100%;
  padding: 1em;
  font-size: 140%;
  position: absolute;
  /*top: 100vh;*/
  left: 0;
  transition: opacity .2s ease-in-out;
  text-align: center;

}

.navbar{
    overflow: hidden;

}



header h1 {
  color: white;
  font-weight: 600px;
  display: inline;
  margin: 0;
  padding: 100px;
  font-size: inherit;
}




@media (min-width: 500px) {
  header {
    text-align: left;
  }
  nav {
    float: right;
  }
 
}

</style >


