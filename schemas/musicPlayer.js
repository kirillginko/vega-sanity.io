export default {
  name: 'song',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'cover',
      type: 'image',
    },
    {
      name: 'artist',
      type: 'string',
    },
    {
      name: 'audio',
      type: 'file',
    },
    {
      name: 'color',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'active',
      type: 'boolean',
    },
  ],
}
