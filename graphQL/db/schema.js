const { gql } = require('apollo-server');
// Schema
const typeDefs = gql`
    type Colegios {
        id : ID
        col_nombre : String
    }
    type Profesores {
        id : ID
        prof_rut : String
        prof_dv : String
        prof_nombres : String
        prof_ape_paterno : String
        prof_ape_materno : String
    }

    type ColegioProfesor {
        colegio : String
        prof_nombres : String

    }

    input ColegioInput {
        col_nombre : String!
        usuario_cambios : String!
    }    
    input ProfesoresInput {
        id :String
    }  
    

    type Query {
        obtenerColegios : [Colegios]
        obtenerColegio(id:ID!) : [Colegios]

        obtenerProfesores : [Profesores]
        obtenerProfesor(input : ProfesoresInput!) : [Profesores]
        obtenerColegioProfesor(input : ProfesoresInput!) : [ColegioProfesor]
    }

    type Mutation {
        nuevoColegio(input: ColegioInput) : String
        editarColegio(id:ID!, input : ColegioInput) : String
        eliminarColegio(id:ID!) : String
    }
`;

module.exports = typeDefs