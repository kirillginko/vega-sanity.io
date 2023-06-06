export default {
	name: 'about',
	title: 'About',
	type: 'document',
	fields: [
	  {
		name: 'header',
		title: 'Header',
		type: 'string',
	  },
	  {
		name: 'imagesGallery',
		title: 'Image Gallery',
		type: 'array',
		of: [{ type: 'image' }]
	   },
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
		name: 'imagesGallery2',
		title: 'Image Gallery 2',
		type: 'array',
		of: [{ type: 'image' }]
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
  

  