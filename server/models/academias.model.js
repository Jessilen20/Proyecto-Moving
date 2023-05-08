const mongoose = require('mongoose');

const AcademiaSchema = new mongoose.Schema({
    alumno: {
        type: String,
        required: [true, "El nombre del estudiante es requerido"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        unique: [true, "El nombre de este estudiante ya existe"]
    },

    curso: {
        type: String,
        required: [true, "El curso del estudiante es requerido"],
        min: [1, "Debe seleccionar al menos 1 curso"]
    },

    apoderado: {
        type: String,
        required: [true, "El nombre del apoderado es requerido"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"]
    },

    telefono: {
        type: String,
        required: [true, "El número de teléfono es requerido"],
        minlength: [8, "Debe ingresar al menos 8 digitos"]
    },
    academias: {
        type: [String],
        required: [true, "Debe seleccionar por lo menos 1 academia"],
        min: [1, "Debe seleccionar por lo menos 1 academia"]
    }

}, { timestamps: true });

module.exports.Academia = mongoose.model('Academia', AcademiaSchema);