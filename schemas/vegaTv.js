export default {
    name: 'vegaTv',
    title: 'Vega TV',
    type: 'document',
    fields: [
		{
			name: 'videoUrls',
			title: 'Video URLs',
			type: 'array',
			of: [{ type: 'url' }],
			description: 'Add a link to a video to be displayed.'
		},
    ],
  }
  