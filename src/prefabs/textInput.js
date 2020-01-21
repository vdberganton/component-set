(() => ({
  name: '@betty-blocks/default/TextInput',
  icon: 'TextInputIcon',
  category: 'FORM',
  structure: [
    {
      name: '@betty-blocks/default/TextInput',
      options: [
        {
          value: '',
          label: 'Input',
          key: 'actionInputId',
          type: 'ACTION_INPUT',
        },
        {
          value: '',
          label: 'Name',
          key: 'formComponentName',
          type: 'TEXT',
        },
        {
          value: 'Label text',
          label: 'Label text',
          key: 'formComponentLabel',
          type: 'TEXT',
        },
        {
          value: 'text',
          label: 'Type',
          key: 'formComponentType',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Text', value: 'text' },
              { name: 'Number', value: 'number' },
              { name: 'Password', value: 'password' },
              { name: 'Email', value: 'email' },
            ],
          },
        },
        {
          value: '',
          label: 'Input text',
          key: 'formComponentValue',
          type: 'TEXT',
        },
        {
          value: false,
          label: 'Required',
          key: 'formComponentRequired',
          type: 'TOGGLE',
        },
      ],
      descendants: [],
    },
  ],
}))();
