const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    date: {
        type: String
    },
    saldoAnterior: {
        type: Number
    },
    previa: {
        type: Number,
        allowNull: true,
        default: 0
    },
    previaPremios: {
        type: Number,
        allowNull: true,
        default: 0
    },
    primera: {
        type: Number,
        allowNull: true,
        default: 0
    },
    primeraPremios: {
        type: Number,
        allowNull: true,
        default: 0
    },
    matutina: {
        type: Number,
        allowNull: true,
        default: 0
    },
    matutinaPremios: {
        type: Number,
        allowNull: true,
        default: 0
    },
    vespertina: {
        type: Number,
        allowNull: true,
        default: 0
    },
    vespertinaPremios: {
        type: Number,
        allowNull: true,
        default: 0
    },
    nocturna: {
        type: Number,
        allowNull: true,
        default: 0
    },
    pedro1: {
        type: Number,
        allowNull: true,
        default: 0
    },
    subTotal: {type: Number},
    nocturnaPremios: {
        type: Number,
        allowNull: true,
        default: 0
    },
    pedro2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    total: {type: Number},
    date2: {type: String},
    saldoAnterior2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    previa2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    previaPremios2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    primera2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    primeraPremios2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    matutina2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    matutinaPremios2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    vespertina2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    vespertinaPremios2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    nocturna2: {
        type: Number,
        allowNull: true,
        default: 0
    },
    pedro12: {
        type: Number,
        allowNull: true,
        default: 0
    },
    subTotal2: {
        type: Number,
        allowNull: true,
        default: 0
    },
})

module.exports = mongoose.model("Ticket", ticketSchema, "data")