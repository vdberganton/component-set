(() => ({
  name: '@betty-blocks/default/Input',
  icon: 'ContainerIcon',
  type: 'INPUT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => <input type="text" className={classes.input} />)(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      input: {
        display: 'inline-flex',
        padding: '0.25rem',
        fontSize: '1rem',
        border: ({ options: { color } }) =>
          `0.0625rem solid ${style.getColor(color)}`,
      },
    };
  },
}))();
