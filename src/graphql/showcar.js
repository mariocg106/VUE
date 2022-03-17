
import gql from 'graphql-tag'


export const showcar = gql`
query CarId($codcoche: ID!) {
  carId(codcoche: $codcoche) {
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