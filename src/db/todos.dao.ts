import { Schema, model } from 'mongoose'

const schema = new Schema({
  id: {
    type: Schema.Types.String,
    unique: true,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  },
  isDone: {
    type: Schema.Types.Boolean,
    required: true
  },
  createdAt: {
    type: Schema.Types.Date,
    required: true
  },
  updatedAt: {
    type: Schema.Types.Date
  }
}, {
  versionKey: false
})

export const TodoDAO = model('todos', schema, 'todos')