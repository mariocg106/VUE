import gql from 'graphql-tag'

export const marcaListQuery = gql`
query MarcaList {
    marcaList {
      nombre
      cifm
    }
  }`