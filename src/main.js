import { createApp,provide, h, Vue  } from 'vue'
import router from './router'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable';

import App from './App.vue'
 import 'bootstrap/dist/css/bootstrap.css'

const defaultClient = new ApolloClient({
    uri: 'http://localhost:3030/graphql',  // esto es URI DE SERVER GRAPHQL !!!!!
    cache: new InMemoryCache()
  })

createApp(
  
    {
    setup (){
        provide( DefaultApolloClient, defaultClient)
            },
          render(){
            return h(App)
          }
    }
    
    
).use(router).mount('#app')


















//createApp(App).use(router).mount('#app')
