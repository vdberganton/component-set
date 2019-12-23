(() => ({
  name: 'Row',
  icon: 'RowIcon',
  type: 'ROW',
  category: 'LAYOUT',
  orientation: 'HORIZONTAL',
  allowedTypes: ['COLUMN'],
  jsx: (() => {
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && B.env === 'dev';
    return (
      <div
        className={[
          classes.row,
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      >
        {isPristine ? 'Row' : children}
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      row: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: ({ options: { margin } }) => style.getSpacing(margin),
        padding: ({ options: { padding } }) => style.getSpacing(padding),
        background: ({ options: { color } }) =>
          ['None', 'transparent'].includes(color)
            ? 'transparent'
            : style.getColor(color),
        [`@media ${B.mediaMinWidth(768)}`]: {
          flexDirection: 'row',
        },
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
      },
    };
  },
}))();
