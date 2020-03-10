(() => ({
  name: '@betty-blocks/default/CustomForm',
  icon: 'ContainerIcon',
  type: 'FORM',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => (
    <form className={classes.root}>
      {children}
      <input type="submit" value="Submit" className={classes.submit} />
    </form>
  ))(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {},
      submit: {
        display: 'block',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        borderRadius: '0.125rem',
        color: '#ffffff',
        border: ({ options: { color } }) =>
          `0.0625rem solid ${style.getColor(color)}`,
        background: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
