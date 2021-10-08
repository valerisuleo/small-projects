const formTemplate = [
    {
        name: "name",
        type: "text",
        label: "Name",
        isRequired: true,
        minLenght: 0,
        className: ''
    },
    {
        name: "photoUrls",
        type: "text",
        label: "Image url",
        isRequired: true,
        minLenght: 0,
        className: 'prepend'
    },
    {
        name: "uid",
        type: "text",
        label: "Pet ID",
        isRequired: true,
        minLenght: 0,
    },
    {
        name: "status",
        type: "select",
        label: "Status",
        isRequired: false,
        minLenght: 0
    }
];

export default formTemplate;

