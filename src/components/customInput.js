(() => ({
  name: '@betty-blocks/default/CustomInput',
  icon: 'ContainerIcon',
  type: 'INPUT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => <input className={classes.root} type="text" />)(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        display: 'block',
        margin: '0.5rem 0',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        borderRadius: '0.125rem',
        background: '#ffffff',
        border: ({ options: { color } }) =>
          `0.0625rem solid ${style.getColor(color)}`,
      },
    };
  },
}))();
