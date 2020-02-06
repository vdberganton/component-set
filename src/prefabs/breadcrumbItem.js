(() => ({
  name: '@betty-blocks/default/BreadCrumbItem',
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
          key: 'endpoint',
          type: 'ENDPOINT',
        },
      ],
      descendants: [],
    },
  ],
}))();
