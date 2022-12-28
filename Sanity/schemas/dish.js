import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'price',
      type: 'number',
      title: 'Dish Price',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Dish Image',
    },
    {
      name: 'type',
      title: 'dishCategory',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'dishCategory' }]
    },
  ]
})
