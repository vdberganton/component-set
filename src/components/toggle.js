(() => ({
  name: '@betty-blocks/default/Toggle',
  icon: 'ContainerIcon',
  type: 'TOGGLE',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
      B.defineFunction('Toggle', () => setToggle(t => !t));
    }, []);
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <span>Options:</span>
          <span>{options.toggle ? 'On' : 'Off'}</span>
        </div>
        <div className={classes.content}>
          <span>Custom:</span>
          <span>{toggle ? 'On' : 'Off'}</span>
        </div>
      </div>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      root: {
        margin: '1rem',
        padding: '1rem',
        fontSize: '1.5rem',
        borderRadius: '0.125rem',
        color: '#ffffff',
        background: ({ options: { color } }) => style.getColor(color),
      },
      content: {
        margin: '0.5rem',
      },
    };
  },
}))();
