import { Schema, Container } from 'js-data';

const projectSchema = new Schema({


  type: 'object', 
  properties: {
    name: { type: 'string' }
  }
});

const store = new Container();

store.defineMapper('project', {
  schema: projectSchema
});