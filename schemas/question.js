export default {
  name: 'question',
  type: 'document',
  title: 'Pregunta',
  fields: [
    {title: 'Bloque', name: 'bloque', type: 'string'},
    {title: 'Tema', name: 'tema', type: 'number'},
    {name: 'name', type: 'string', title: 'Title'},
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      // of: [{ type: 'block' }],
    },
    {
      title: 'Respuestas',
      name: 'respuestas',
      type: 'string',
      options: {
        list: [
          {title: 'One Column', value: '1'},
          {title: 'Two Columns', value: '2'},
          {title: 'Three Col', value: '3'},
        ],
        layout: 'radio',
        direction: 'vertical',
      },
    },
    {title: 'Respuesta Correcta', name: 'correct_answer', type: 'number'},
  ],
}
