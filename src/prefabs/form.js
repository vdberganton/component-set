(() => ({
  name: '@betty-blocks/default/Form',
  icon: 'FormIcon',
  category: 'FORM',
  structure: [
    {
      name: '@betty-blocks/default/Form',
      options: [
        {
          value: '',
          label: 'Action',
          key: 'actionId',
          type: 'ACTION',
        },
        {
          value: '',
          label: 'Redirect after submit',
          key: 'redirect',
          type: 'ENDPOINT',
        },
        {
          value: 'Thanks for submitting the form!',
          label: 'Success message',
          key: 'formSuccessMessage',
          type: 'TEXT',
        },
        {
          value: 'Failed to submit the form!',
          label: 'Error message',
          key: 'formErrorMessage',
          type: 'TEXT',
        },
        {
          value: ['0rem', '0rem', 'M', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [
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
              value: 'Label',
              label: 'Label',
              key: 'label',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Default value',
              key: 'value',
              type: 'TEXT',
            },
            {
              value: false,
              label: 'Required',
              key: 'required',
              type: 'TOGGLE',
            },
          ],
          descendants: [],
        },
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
              value: 'Label',
              label: 'Label',
              key: 'label',
              type: 'TEXT',
            },
            {
              value: '',
              label: 'Default value',
              key: 'value',
              type: 'TEXT',
            },
            {
              value: false,
              label: 'Required',
              key: 'required',
              type: 'TOGGLE',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
