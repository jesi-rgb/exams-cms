export default {
  name: 'subtipo1',
  type: 'document',
  title: 'Subtipo1',
  fields: [
    {title: 'Bloque', name: 'bloque', type: 'string'},
    {title: 'Tema', name: 'tema', type: 'number'},
    {name: 'name', type: 'string', title: 'Title'},
    {
      title: 'Enunciado',
      name: 'enunciado',
      type: 'string',
    },
    {title: 'Término', name: 'termino', type: 'string'},
    {
      title: 'Oraciones',
      name: 'oraciones',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Opciones',
      name: 'opciones',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
