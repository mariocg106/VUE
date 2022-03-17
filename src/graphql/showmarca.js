import gql from 'graphql-tag'


export const showmarca = gql`
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
}`