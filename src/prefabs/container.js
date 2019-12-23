(() => ({
  name: 'Container',
  icon: 'Layout444Icon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Row',
      options: [
        {
          type: 'COLOR',
          label: 'Color',
          key: 'color',
          value: 'transparent',
        },
        {
          type: 'SIZE',
          label: 'Margin',
          key: 'margin',
          value: 'M',
        },
        {
          type: 'SIZE',
          label: 'Padding',
          key: 'padding',
          value: 'M',
        },
      ],
      descendants: [
        {
          name: 'Column',
          options: [
            {
              type: 'COLOR',
              label: 'Color',
              key: 'color',
              value: 'transparent',
            },
            {
              type: 'SIZE',
              label: 'Margin',
              key: 'margin',
              value: 'M',
            },
            {
              type: 'SIZE',
              label: 'Padding',
              key: 'padding',
              value: 'M',
            },
          ],
          descendants: [],
        },
        {
          name: 'Column',
          options: [
            {
              type: 'COLOR',
              label: 'Color',
              key: 'color',
              value: 'transparent',
            },
            {
              type: 'SIZE',
              label: 'Margin',
              key: 'margin',
              value: 'M',
            },
            {
              type: 'SIZE',
              label: 'Padding',
              key: 'padding',
              value: 'M',
            },
          ],
          descendants: [],
        },
        {
          name: 'Column',
          options: [
            {
              type: 'COLOR',
              label: 'Color',
              key: 'color',
              value: 'transparent',
            },
            {
              type: 'SIZE',
              label: 'Margin',
              key: 'margin',
              value: 'M',
            },
            {
              type: 'SIZE',
              label: 'Padding',
              key: 'padding',
              value: 'M',
            },
          ],
          descendants: [],
        },
      ],
    },
  ],
}))();
