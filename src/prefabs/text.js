(() => ({
  name: 'Text',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Text',
      options: [
        {
          type: 'TOGGLE',
          label: 'Special',
          key: 'special',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Seven',
          key: 'seven',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Eight',
          key: 'eight',
          value: false,
        },
        {
          type: 'TOGGLE',
          label: 'Nine',
          key: 'nine',
          value: true,
        },
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: ['Type your content here...'],
          configuration: {
            as: 'MULTILINE',
          },
        },
        {
          value: 'Body1',
          label: 'Type',
          key: 'type',
          type: 'FONT',
        },
        {
          type: 'CUSTOM',
          label: 'Text Alignment',
          key: 'textAlignment',
          value: 'left',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Left', value: 'left' },
              { name: 'Center', value: 'center' },
              { name: 'Right', value: 'right' },
            ],
          },
        },
        {
          value: ['0rem', '0rem', '0rem', '0rem'],
          label: 'Outer space',
          key: 'outerSpacing',
          type: 'SIZES',
        },
      ],
      descendants: [],
    },
  ],
}))();
