export default{
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Role',
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
            name: 'startDate',
            title: 'Start Date',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(10)
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(10)
        },
        {
            name: 'tasks',
            title: 'Tasks',
            type: 'text',
            validation: Rule => Rule.required().min(1).max(1000)
        }
    ]
};