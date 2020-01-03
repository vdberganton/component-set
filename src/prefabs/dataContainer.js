(() => ({
  name: '@betty-blocks/default/DataContainer',
  icon: 'DataContainer',
  category: 'DATA',
  structure: [
    {
      name: '@betty-blocks/default/DataContainer',
      options: [
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: ['', 'eq', ''],
          label: 'Filter',
          key: 'filter',
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
