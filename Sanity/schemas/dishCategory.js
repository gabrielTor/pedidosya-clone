import {defineType} from 'sanity'

export default defineType({
  name: 'dishCategory',
  title: 'Dish_Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'dishCategory',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Dish Image',
    }
  ]
})
