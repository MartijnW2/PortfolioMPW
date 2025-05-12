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
            name: 'image',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true // Enables the hotspot feature for better image cropping
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(500)
        }
    ]
};