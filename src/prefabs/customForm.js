(() => ({
  name: '@betty-blocks/default/CustomForm',
  icon: 'ContainerIcon',
  category: 'CONTENT',
  structure: [
    {
      name: '@betty-blocks/default/CustomForm',
      options: [
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Primary',
        },
      ],
      descendants: [
        {
          name: '@betty-blocks/default/CustomInput',
          options: [
            {
              type: 'COLOR',
              label: 'Color',
              key: 'color',
              value: 'Primary',
            },
          ],
          descendants: [],
        },
        {
          name: '@betty-blocks/default/CustomInput',
          options: [
            {
              type: 'COLOR',
              label: 'Color',
              key: 'color',
              value: 'Primary',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
