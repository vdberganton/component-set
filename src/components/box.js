(() => ({
  name: 'Box',
  icon: 'BoxIcon',
  type: 'BOX',
  category: 'LAYOUT',
  orientation: 'HORIZONTAL',
  allowedTypes: ['BOX'],
  jsx: (() => {
    const { Box } = Grommet;
    return (
      <div>
        <Box
          direction="row"
          border={{ color: 'brand', size: 'large' }}
          pad="medium"
        >
          {children}
        </Box>
      </div>
    );
  })(),
  styles: B => t => {
    const s = new B.Styling(t);
    console.log('Hi!', B, t, s);
    return {
      root: {},
    };
  },
}))();
