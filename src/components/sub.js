(() => ({
  name: '@betty-blocks/default/Sub',
  icon: 'SubIcon',
  category: 'SUB',
  type: 'SUB',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => <h1 className={classes.root}>{options.text || ''}</h1>)(),
  styles: () => () => ({
    root: {
      color: '#404040',
    },
  }),
}))();
