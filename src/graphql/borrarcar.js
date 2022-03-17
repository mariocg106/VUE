import gql from 'graphql-tag'
export const addcar = gql`
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
}`