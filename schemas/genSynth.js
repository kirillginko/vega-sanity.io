export default {
	name: 'Gen-Synth',
	title: 'Gen-Synth',
	type: 'document',
	fields: [
	  {
		name: 'header',
		title: 'Header',
		type: 'string',
	  },
	//   { currently unused
	// 	name: 'image',
	// 	title: 'Image',
	// 	type: 'image',
	// 	options: {
	// 	  hotspot: true,
	// 	},
	//   },
	  {
		name: 'body',
		title: 'Body',
		type: 'array',
		of: [
		  {
			type: 'block',
			styles: [
			  { title: 'Normal', value: 'normal' },
			  { title: 'Heading 1', value: 'h1' },
			  { title: 'Heading 2', value: 'h2' },
			  { title: 'Heading 3', value: 'h3' },
			  { title: 'Heading 4', value: 'h4' },
			  { title: 'Heading 5', value: 'h5' },
			  { title: 'Heading 6', value: 'h6' },
			  { title: 'Bold', value: 'bold' },
			  { title: 'Italic', value: 'italic' },
			],
			marks: {
			  decorators: [
				{ title: 'Strong', value: 'strong' },
				{ title: 'Emphasis', value: 'em' },
			  ],
			},
		  },
		],
	  },
	  {
		name: 'imagesGallery',
		title: 'Image Gallery',
		type: 'array',
		of: [{ type: 'image' }]
	  },
	  {
		name: 'videos',
		title: 'Videos',
		type: 'array',
		of: [
		  {
			type: 'object',
			fields: [
			  {
				name: 'videoUrl',
				title: 'Video URL (for embedded videos)',
				type: 'url',
				description: 'Add a link to a video to be embedded directly on the page.',
			  },
			  {
				name: 'videoLink',
				title: 'Video Link (for external videos)',
				type: 'url',
				description: 'Add a link to an external video page (e.g., YouTube, Vimeo).',
			  },
			  {
				name: 'thumbnail',
				title: 'Thumbnail',
				type: 'image',
				description: 'Add a thumbnail image for the video.',
			  },
			],
		  },
		],
	  },
	  {
		name: 'body2',
		title: 'Body2',
		type: 'array',
		of: [
		  {
			type: 'block',
			styles: [
			  { title: 'Normal', value: 'normal' },
			  { title: 'Heading 1', value: 'h1' },
			  { title: 'Heading 2', value: 'h2' },
			  { title: 'Heading 3', value: 'h3' },
			  { title: 'Heading 4', value: 'h4' },
			  { title: 'Heading 5', value: 'h5' },
			  { title: 'Heading 6', value: 'h6' },
			  { title: 'Bold', value: 'bold' },
			  { title: 'Italic', value: 'italic' },
			],
			marks: {
			  decorators: [
				{ title: 'Strong', value: 'strong' },
				{ title: 'Emphasis', value: 'em' },
			  ],
			},
		  },
		],
	  },
	],
  };