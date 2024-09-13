export default {
	name: 'caseStudies',
	title: 'Case Studies',
	type: 'document',
	fields: [
	  {
		name: 'order',
		title: 'Order',
		type: 'number',
		description: 'Use this field to set the order of the case studies. Lower numbers appear first.',
	  },
	  {
		name: 'header',
		title: 'Case Study Heading (gif heading)',
		type: 'string',
		validation: (Rule) => Rule.max(64).warning('The heading should not exceed 64 characters.'),
	  },
	  {
		name: 'title',
		title: 'Title',
		type: 'string',
	  },
	  {
		name: 'subtitle',
		title: 'Subtitle',
		type: 'string',
	  },
	  {
		name: 'services',
		title: 'Services',
		type: 'array',
		of: [{type: 'string'}],
		options: {
		  layout: 'tags',
		},
	  },
	  {
		name: 'image',
		title: 'Gif Animation for Case Study selector',
		type: 'image',
	  },
	  {
		name: 'projectBreakdown',
		title: 'Project Breakdown',
		type: 'string',
		description: 'A brief heading or introduction to the project breakdown, positioned above the detailed summary.',
		default: 'Project Breakdown',
	  },
	  {
		name: 'body',
		title: 'Detailed Project Summary',
		type: 'array',
		description: 'Detailed text about the project following the Project Breakdown introduction.',
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
		name: 'portrait',
		title: 'Portrait Image or Video',
		type: 'array',
		of: [
		  {
			type: 'image',
			options: {
			  hotspot: true,
			},
		  },
		  {
			type: 'file',
			title: 'Video File',
			options: {
			  accept: 'video/*',  // Allows all video formats
			},
		  },
		],
	  },	  
	  {
		name: 'imageGallery1',
		title: 'Image Gallery 1',
		type: 'array',
		description: 'Add images and videos to the gallery.',
		of: [
		  {
			type: 'image',
			options: {
			  hotspot: true,
			},
		  },
		  {
			type: 'file',  
			title: 'Video File',
			options: {
			  accept: 'video/*',  // Add specific formats like MOV
			},
		  }
		],
		validation: (Rule) => Rule.max(5).error('Maximum of 5 files (images or videos) allowed.'),
	  },
	],
	orderings: [
	  {
		title: 'Order, Asc',
		name: 'orderAsc',
		by: [{field: 'order', direction: 'asc'}],
	  },
	  {
		title: 'Order, Desc',
		name: 'orderDesc',
		by: [{field: 'order', direction: 'desc'}],
	  },
	],
  };
  