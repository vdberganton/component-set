(() => ({
  name: 'Column',
  icon: 'ColumnIcon',
  type: 'COLUMN',
  category: 'LAYOUT',
  orientation: 'VERTICAL',
  allowedTypes: ['BUTTON', 'GAME'],
  jsx: (() => {
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && B.env === 'dev';
    return (
      <div
        className={[
          classes.column,
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      >
        {isPristine ? 'Column' : children}
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      column: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: ({ options: { margin } }) => style.getSpacing(margin),
        padding: ({ options: { padding } }) => style.getSpacing(padding),
        background: ({ options: { color } }) =>
          ['None', 'transparent'].includes(color)
            ? 'transparent'
            : style.getColor(color),
      },
      empty: {
        minHeight: '4rem',
      },
      pristine: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#262A3A',
        background: '#F0F1F5 !important',
        border: '0.0625rem dashed #AFB5C8',
        fontSize: '0.875rem',
      },
    };
  },
}))();
