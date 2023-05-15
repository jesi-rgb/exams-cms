export default {
  name: 'question',
  type: 'document',
  title: 'Question',
  fields: [
    { name: 'name', type: 'string', title: 'Title' },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Respuestas',
      name: 'answers',
      type: 'string',
      options: {
        list: [
          { title: 'One Column', value: '1' },
          { title: 'Two Columns', value: '2' },
          { title: 'Three Col', value: '3' },
        ],
        layout: 'radio',
        direction: 'vertical',
      },
    },
    { title: 'Respuesta Correcta', name: 'correct_answer', type: 'number' },
  ],
}
