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
			name: 'logo',
			title: 'Logo',
			type: 'file',
			options: {
			  accept: 'video/webm, video/mp4'
			},
		},
		{
			name: 'imagesGallery',
			title: 'Clients Gallery',
			type: 'array',
			of: [
				{
				  type: 'image',
				  options: { hotspot: true },
				},
			],
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'Heading 1', value: 'h1'},
						{title: 'Heading 2', value: 'h2'},
						{title: 'Heading 3', value: 'h3'},
						{title: 'Heading 4', value: 'h4'},
						{title: 'Heading 5', value: 'h5'},
						{title: 'Heading 6', value: 'h6'},
						{title: 'Bold', value: 'bold'},
						{title: 'Italic', value: 'italic'},
						{title: 'Left Align', value: 'left-align'},
						{title: 'Center Align', value: 'center-align'},
						{title: 'Right Align', value: 'right-align'},
					],
					marks: {
						decorators: [
							{title: 'Strong', value: 'strong'},
							{title: 'Emphasis', value: 'em'},
						],
					},
				},
			],
		},
		{
			name: 'skill1',
			title: 'Skill 1',
			type: 'object',
			fields: [
				{ name: 'title', type: 'string', title: 'Title' },
				{ name: 'list', type: 'array', title: 'List', of: [{type: 'string'}] },
			],
		},
		{
			name: 'skill2',
			title: 'Skill 2',
			type: 'object',
			fields: [
				{ name: 'title', type: 'string', title: 'Title' },
				{ name: 'list', type: 'array', title: 'List', of: [{type: 'string'}] },
			],
		},
		{
			name: 'skill3',
			title: 'Skill 3',
			type: 'object',
			fields: [
				{ name: 'title', type: 'string', title: 'Title' },
				{ name: 'list', type: 'array', title: 'List', of: [{type: 'string'}] },
			],
		},
		{
			name: 'imagesGallery2',
			title: 'Image Gallery 2',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'image', type: 'image', title: 'Image', options: { hotspot: true },},
						{ name: 'name', type: 'string', title: 'Name' },
						{ name: 'title', type: 'string', title: 'Title' }
					]
				}
			],
		},
		// {
		// 	name: 'body2',
		// 	title: 'Body2',
		// 	type: 'array',
		// 	of: [
		// 		{
		// 			type: 'block',
		// 			styles: [
		// 				{title: 'Normal', value: 'normal'},
		// 				{title: 'Heading 1', value: 'h1'},
		// 				{title: 'Heading 2', value: 'h2'},
		// 				{title: 'Heading 3', value: 'h3'},
		// 				{title: 'Heading 4', value: 'h4'},
		// 				{title: 'Heading 5', value: 'h5'},
		// 				{title: 'Heading 6', value: 'h6'},
		// 				{title: 'Bold', value: 'bold'},
		// 				{title: 'Italic', value: 'italic'},
		// 				{title: 'Left Align', value: 'left-align'},
		// 				{title: 'Center Align', value: 'center-align'},
		// 				{title: 'Right Align', value: 'right-align'},
		// 			],
		// 			marks: {
		// 				decorators: [
		// 					{title: 'Strong', value: 'strong'},
		// 					{title: 'Emphasis', value: 'em'},
		// 				],
		// 			},
		// 		},
		// 	],
		// },
	],
}
