const { db } = require('../config/firebase');
const moment = require('moment')
//Resolvers
const resolvers = {
    Query: {

        obtenerColegios: async () => {
            const colegios = [];
            await db.collection('Colegios').get().then(e => {


                e.forEach((doc) => {

                    colegios.push({
                        "id": doc.id,
                        "col_nombre" : doc.data().col_nombre
                    })
                });
            });
            return colegios;
        },
        obtenerColegio: async (_, {id}) => {
            
            const colegio = [];
            await db.collection('Colegios').doc(id).get().then(doc => {
                
                colegio.push({
                    "id": doc.id,
                    "col_nombre" : doc.data().col_nombre
                })
            });
            return colegio;
        },
        obtenerProfesores: async () => {
            
            const profesores = [];
            await db.collection('Profesores').get().then(e => {


                e.forEach((doc) => {

                    profesores.push({
                        "id": doc.id,
                        "prof_rut" : doc.data().prof_rut,
                        "prof_dv" : doc.data().prof_dv,
                        "prof_nombres": doc.data().prof_nombres,
                        "prof_ape_paterno" : doc.data().prof_ape_paterno,
                        "prof_ape_materno" : doc.data().prof_ape_materno
                    })
                });
            });
            return profesores;
        },
        obtenerProfesor: async (_, { input }) => {

            const profesor = [];
            await db.collection('Profesores').doc(input.id).get().then(doc => {
                profesor.push({
                    "id": doc.id,
                    "prof_rut" : doc.data().prof_rut,
                    "prof_dv" : doc.data().prof_dv,
                    "prof_nombres": doc.data().prof_nombres,
                    "prof_ape_paterno" : doc.data().prof_ape_paterno,
                    "prof_ape_materno" : doc.data().prof_ape_materno
                })
            });
            return profesor;
        },
        obtenerColegioProfesor: async (_, { input }) => {

            const merge = [];

            let profesor = [];
            await db.collection('Profesores').doc(input.id).get().then(doc => {

                profesor.push({
                    "id": doc.id,
                    "id_colegio" : doc.data().colegio,
                    "prof_nombres": doc.data().prof_nombres,
                })
            });
            // console.log(profesor)
            let colegio= [];
            await db.collection('Colegios').doc(profesor[0].id_colegio.trim()).get().then(col => {
                
                colegio.push({
                    "colegio" : col.data().col_nombre
                })
            })
            
            merge.push({
                "colegio": colegio[0].colegio,
                "prof_nombres" : profesor[0].prof_nombres 
            })

            return merge;
        }
    },
    Mutation: {
        nuevoColegio: (_, { input }) => {
            
            let fechaActual = moment().format('L');

            db.collection("Colegios").add({
                col_nombre: input.col_nombre,
                fecha_cambios : fechaActual,
                usuario_cambios: input.usuario_cambios
            });

            return 'colegio creado'
        },
        editarColegio: (_, { id, input }) => {
            
            let fechaActual = moment().format('L');
    
            db.collection("Colegios").doc(id).update({
                col_nombre: input.col_nombre,
                fecha_cambios : fechaActual,
                usuario_cambios: input.usuario_cambios
            });
    
            return 'colegio actualizado'
        },
        eliminarColegio: (_, { id }) => {
            db.collection("Colegios").doc(id).delete()
            return 'colegio eliminado'
        }

    }
};




module.exports = resolvers