(() => ({
  name: '@betty-blocks/default/SidebarLeft',
  icon: 'AlertIcon',
  category: 'NAVIGATION',
  structure: [
    {
      name: '@betty-blocks/default/PageBody',
      options: [],
      descendants: [
        {
          name: '@betty-blocks/default/SideNavigation',
          options: [
            {
              type: 'VARIABLE',
              label: 'Title',
              key: 'title',
              value: ['Sidebar Title'],
            },
            {
              type: 'TOGGLE',
              label: 'Collapsed',
              key: 'collapsed',
              value: false,
            },
          ],
          descendants: [
            {
              name: '@betty-blocks/default/SideNavItem',
              options: [
                {
                  type: 'VARIABLE',
                  label: 'Button text',
                  key: 'navigationContent',
                  value: ['Side Nav Item 1'],
                },
                {
                  type: 'CUSTOM',
                  label: 'Link to',
                  key: 'linkType',
                  value: 'Internal',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Internal page', value: 'Internal' },
                      { name: 'External page', value: 'External' },
                    ],
                  },
                },
                {
                  value: '',
                  label: 'Page',
                  key: 'endpointId',
                  type: 'ENDPOINT',
                  configuration: {
                    condition: {
                      type: 'SHOW',
                      option: 'linkType',
                      comparator: 'EQ',
                      value: 'Internal',
                    },
                  },
                },
                {
                  value: '',
                  label: 'URL',
                  key: 'linkToExternal',
                  type: 'TEXT',
                  configuration: {
                    placeholder: 'Starts with https:// or http://',
                    condition: {
                      type: 'SHOW',
                      option: 'linkType',
                      comparator: 'EQ',
                      value: 'External',
                    },
                  },
                },
              ],
              descendants: [],
            },
            {
              name: '@betty-blocks/default/SideNavItem',
              options: [
                {
                  type: 'VARIABLE',
                  label: 'Button text',
                  key: 'navigationContent',
                  value: ['Side Nav Item 2'],
                },
                {
                  type: 'CUSTOM',
                  label: 'Link to',
                  key: 'linkType',
                  value: 'Internal',
                  configuration: {
                    as: 'BUTTONGROUP',
                    dataType: 'string',
                    allowedInput: [
                      { name: 'Internal page', value: 'Internal' },
                      { name: 'External page', value: 'External' },
                    ],
                  },
                },
                {
                  value: '',
                  label: 'Page',
                  key: 'endpointId',
                  type: 'ENDPOINT',
                  configuration: {
                    condition: {
                      type: 'SHOW',
                      option: 'linkType',
                      comparator: 'EQ',
                      value: 'Internal',
                    },
                  },
                },
                {
                  value: '',
                  label: 'URL',
                  key: 'linkToExternal',
                  type: 'TEXT',
                  configuration: {
                    placeholder: 'Starts with https:// or http://',
                    condition: {
                      type: 'SHOW',
                      option: 'linkType',
                      comparator: 'EQ',
                      value: 'External',
                    },
                  },
                },
              ],
              descendants: [],
            },
          ],
        },
        {
          name: '@betty-blocks/default/PageContent',
          options: [],
          descendants: [],
        },
      ],
    },
  ],
}))();
