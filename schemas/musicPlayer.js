export default {
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'cover', title: 'Cover', type: 'image'},
	{
		name: 'color',
		title: 'Color',
		type: 'array',
		of: [{type: 'color', options: {disableAlpha: true}}],
		validation: (Rule) => Rule.length(2),
	  },
    {name: 'artist', title: 'Artist', type: 'string'},
    {name: 'audio', title: 'Audio', type: 'url'},
  ],
}
