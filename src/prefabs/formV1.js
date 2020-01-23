(() => ({
  name: '@betty-blocks/default/FormV1',
  icon: 'FormIcon',
  category: 'FORM',
  structure: [
    {
      name: '@betty-blocks/default/FormV1',
      options: [
        {
          value: '',
          label: 'Action',
          key: 'actionId',
          type: 'ACTION',
          configuration: {
            apiVersion: 'v1',
          },
        },
        {
          type: 'ENDPOINT',
          label: 'Redirect to endpoint after success',
          key: 'formEndpoint',
          value: '',
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
              label: 'Input variable',
              key: 'actionInputId',
              type: 'ACTION_INPUT',
            },
            {
              value: 'Label',
              label: 'Label',
              key: 'formComponentLabel',
              type: 'TEXT',
            },
            {
              value: 'text',
              label: 'Input variable type',
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
              value: false,
              label: 'Required',
              key: 'formComponentRequired',
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
              value: false,
              label: 'Required',
              key: 'formComponentRequired',
              type: 'TOGGLE',
            },
          ],
          descendants: [],
        },
        {
          name: '@betty-blocks/default/SubmitButton',
          options: [
            {
              value: 'Submit',
              label: 'Button text',
              key: 'submitButtonText',
              type: 'TEXT',
            },
            {
              value: 'Primary',
              label: 'Button Color',
              key: 'backgroundColor',
              type: 'COLOR',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();