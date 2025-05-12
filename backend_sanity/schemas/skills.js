export default{
    name: 'techStack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        {
            name: 'skill',
            title: 'Skill',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(500)
        },
    ]
};