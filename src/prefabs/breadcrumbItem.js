(() => ({
  name: '@betty-blocks/default/BreadCrumb Item',
  icon: 'BreadcrumbItemIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: '@betty-blocks/default/BreadcrumbItem',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'breadcrumbContent',
          value: ['Breadcrumb Item'],
        },
        {
          value: '',
          label: 'Link to',
          key: 'endpointId',
          type: 'ENDPOINT',
        },
      ],
      descendants: [],
    },
  ],
}))();
