export default {
  name: 'subtipo2',
  type: 'document',
  title: 'Subtipo2',
  fields: [
    {title: 'Bloque', name: 'bloque', type: 'string'},
    {title: 'Tema', name: 'tema', type: 'string'},
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
