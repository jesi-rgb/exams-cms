export default {
  name: 'subtipo3',
  type: 'document',
  title: 'Subtipo3',
  fields: [
    { name: 'name', type: 'string', title: 'Título (no se usa en la aplicación)' },
    { title: 'Bloque', name: 'bloque', type: 'string' },
    { title: 'Tema', name: 'tema', type: 'string' },
    {
      title: 'Enunciado',
      name: 'enunciado',
      type: 'string',
      // of: [{ type: 'block' }],
    },
    {
      title: 'Respuesta',
      name: 'respuesta',
      type: 'string',
    },
  ],
}
