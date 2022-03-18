
import gql from 'graphql-tag'

export const carListQuery = gql`
query  carList  {
  carList {
    
    codcoche
    imagen
    nombre
    modelo
    precio
    Kilometros
    marchas
    Ano
    descripcion
    

  }
 
}`