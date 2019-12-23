(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Button',
      options: [
        {
          type: 'VARIABLE',
          label: 'Text',
          key: 'text',
          value: ['Button'],
        },
        {
          value: 'Primary',
          label: 'Color',
          key: 'color',
          type: 'COLOR',
        },
      ],
      descendants: [],
    },
  ],
}))();
