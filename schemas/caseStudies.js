export default {
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description:
        'Use this field to set the order of the case studies. Lower numbers appear first.',
    },
    {
      name: 'header',
      title: 'Case Study Header',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('The header should not exceed 64 characters.'),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
	{
		name: 'services',
		title: 'Services',
		type: 'array',
		of: [{ type: 'string' }],
		options: {
			layout: 'tags',
		},
	},
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
	name: 'imagesGallery',
	title: 'Image Gallery',
	type: 'array',
	description: 'Add images to the gallery. Gifs must be 800W x 600H',
	of: [
		{
			type: 'image',
			options: {
				hotspot: true,
			},
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
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Heading 5', value: 'h5'},
            {title: 'Heading 6', value: 'h6'},
            {title: 'Bold', value: 'bold'},
            {title: 'Italic', value: 'italic'},
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
}
