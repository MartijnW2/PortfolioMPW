export default{
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'message',
            title: 'Message',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(1000)
        }
    ]
};