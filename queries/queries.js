import { gql } from 'apollo-boost';

const THOUGHTS_QUERY = gql`
   {
        thoughts {
            id
            title
            year
            copy
            tags {
                name
            }
        }
    }
`

const TAGS_QUERY = gql`
    {
        tags {
            id
            name
        }
    }
`

const ADD_THOUGHT = gql`
    mutation AddAlbum($title: String!, $copy: String!, $year: Int!, $tagIds: [ID!]){
        addAlbum(title: $title, copy: $copy, year: $year, tagIds: $tagIds){
            name
            id
        }
    }
`

export { THOUGHTS_QUERY, TAGS_QUERY, ADD_THOUGHT  }