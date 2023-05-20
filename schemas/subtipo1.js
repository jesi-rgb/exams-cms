export default {
  name: 'subtipo1',
  type: 'document',
  title: 'Subtipo1',
  fields: [
    { name: 'name', type: 'string', title: 'Título (no se usa en la aplicación)' },
    { title: 'Bloque', name: 'bloque', type: 'string' },
    { title: 'Tema', name: 'tema', type: 'number' },
    {
      title: 'Enunciado',
      name: 'enunciado',
      type: 'string',
    },
    { title: 'Término a analizar', name: 'termino', type: 'string' },
    {
      title: 'Opciones a elegir en desplegable',
      name: 'opciones',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Oraciones a analizar',
      name: 'oraciones',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Respuestas correctas para cada oración',
      name: 'respuestas',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
