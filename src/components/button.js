(() => ({
  name: 'Button',
  icon: 'ButtonIcon',
  type: 'BUTTON',
  category: 'CONTENT',
  orientation: 'VERTICAL',
  allowedTypes: [],
  jsx: (() => {
    const { disabled, text } = options;
    return (
      <button
        type="button"
        className={classes.button}
        disabled={B.env === 'dev' ? false : disabled === 'true'}
      >
        <B.Text value={text} />
      </button>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      button: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'inline-flex',
        margin: 0,
        padding: '0.5rem 1rem',
        border: 0,
        borderRadius: '0.25rem',
        color: style.getColor('White'),
        background: ({ options: { color } }) => style.getColor(color),
        opacity: ({ options: { disabled } }) => (disabled === 'true' ? 0.3 : 1),
        font: '1rem Roboto, sans-serif',
        '&:hover, &:active, &:focus': {
          color: '#ffff00',
        },
      },
    };
  },
}))();
