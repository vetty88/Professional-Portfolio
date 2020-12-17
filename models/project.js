import { Schema, Container } from 'js-data';

const projectSchema = new Schema({
  // $schema: 'http://json-schema.org/draft-04/schema#', // optional
  // title: 'Person',                                    // optional
  // description: 'Schema for Person Records.',          // optional

  type: 'object', // required
  properties: {
    name: { type: 'string' }
  }
});

const store = new Container();

store.defineMapper('project', {
  schema: projectSchema
});