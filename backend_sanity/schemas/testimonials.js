export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(500)
        }
    ]
};