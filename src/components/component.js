(() => ({
  name: 'Component',
  icon: 'ComponentIcon',
  category: 'CONTENT',
  type: 'COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      B.defineFunction('Toggle', () => setShow(v => !v));
    }, []);

    return <div className={classes.root}>{show ? 'Show' : 'Hide'}</div>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);

    return {
      root: {
        margin: '1rem',
        padding: '1rem',
        fontSize: '3rem',
        borderRadius: '0.125rem',
        background: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
