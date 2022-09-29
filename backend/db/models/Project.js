import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        uppercase: true,
        enum: ['NOT_STARTED', 'IN_PROGRESS', 'DONE']
    }
})

const Project = mongoose.model('Project', projectSchema)

export default Project
