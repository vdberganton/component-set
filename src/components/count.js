(() => ({
  name: '@betty-blocks/default/Count',
  icon: 'ContainerIcon',
  type: 'COUNT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      B.defineFunction('Count', () => setCount(c => c + 1));
    }, []);
    return (
      <div className={classes.root}>
        <span className={classes.content}>{count}</span>
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        boxSizing: 'border-box',
        display: 'flex',
        width: '8rem',
        height: '6rem',
        margin: '1rem',
        padding: '1rem',
        fontSize: '2rem',
        color: 'rgba(255, 255, 255, 1)',
        borderRadius: '0.125rem',
        justifyContent: 'center',
        alignItems: 'center',
        background: ({ options: { color } }) => style.getColor(color),
      },
      content: {
        display: 'inline-flex',
      },
    };
  },
}))();
