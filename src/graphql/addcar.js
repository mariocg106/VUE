import gql from 'graphql-tag'


export const addcar = gql`
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
}`