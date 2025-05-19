export default{
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'skill',
            title: 'Skill',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'acquiredAt',
            title: 'AcquiredAt',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(500)
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'text',
        },
                {
            name: 'tag',
            title: 'Tag',
            type: 'text',
        },
    ]
};