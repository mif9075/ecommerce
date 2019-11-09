const formArray = [
    {
input: {
    type: 'title',
    name: 'title',
    id: 'input-title',
    label: 'Title',
    style: {
        width: '250px',
        marginTop: '15px'
    },
    validators: ['required'],
    errorMessages: ['This field is required.']
}
    }
]

export default formArray;