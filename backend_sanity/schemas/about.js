export default{
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'profilepicture',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(1000)
        }
    ]
};