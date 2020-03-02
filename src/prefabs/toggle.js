(() => ({
  name: '@betty-blocks/default/Toggle',
  icon: 'ContainerIcon',
  category: 'CONTENT',
  structure: [
    {
      name: '@betty-blocks/default/Toggle',
      options: [
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'Primary',
        },
        {
          type: 'TOGGLE',
          label: 'Toggle',
          key: 'toggle',
          value: false,
        },
      ],
      descendants: [],
    },
  ],
}))();
