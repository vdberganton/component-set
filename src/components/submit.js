(() => ({
  name: '@betty-blocks/default/Submit',
  icon: 'ContainerIcon',
  type: 'INPUT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => (
    <form>
      <input className={classes.submit} type="submit" value="Submit" />
    </form>
  ))(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      submit: {
        display: 'inline-flex',
        margin: '1rem',
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        borderRadius: '0.125rem',
        background: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
