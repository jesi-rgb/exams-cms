export default {
  name: 'subtipo2',
  type: 'document',
  title: 'Subtipo 2: Respuesta exacta',
  fields: [
    {
      name: 'name',
      type: 'string',
      title:
        'Título, no se usa en la aplicación. Meramente orientativo para poder identificar las preguntas más fácilmente desde el panel lateral.',
    },
    { title: 'Bloque', name: 'bloque', type: 'string' },
    { title: 'Tema', name: 'tema', type: 'string' },
    {
      title: 'Enunciado',
      name: 'enunciado',
      type: 'string',
    },
    {
      title: 'Formas gramaticales a analizar (p.e: Complemento Directo)',
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
      title:
        'Respuestas correctas para cada oración. El formato de la respuesta es la respuesta a cada opción, separada por punto y coma. Por ejemplo, si en la primera oración el CD es "la verdad" y el CI "le", el formato sería "la verdad;le". En caso de que no hubiera CI, introducimos "la verdad;0". Las opciones se escriben en el mismo orden en el que se hayan introducido las formas gramaticales a analizar en el campo anterior, de forma que se correspondan respectivamente.',
      name: 'respuesta',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
