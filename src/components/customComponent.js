(() => ({
  name: '@betty-blocks/default/CustomComponent',
  icon: 'ContainerIcon',
  type: 'FORM',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const [toggle, setToggle] = useState(0);
    const [click, setClick] = useState(0);
    const [change, setChange] = useState(0);
    const [focus, setFocus] = useState(0);
    const [blur, setBlur] = useState(0);
    const [submit, setSubmit] = useState(0);
    useEffect(() => {
      B.defineFunction('Toggle', () => setToggle(t => !t));
      B.defineFunction('IncrementClick', () => setClick(n => n + 1));
      B.defineFunction('IncrementChange', () => setChange(n => n + 1));
      B.defineFunction('IncrementFocus', () => setFocus(n => n + 1));
      B.defineFunction('IncrementBlur', () => setBlur(n => n + 1));
      B.defineFunction('IncrementSubmit', () => setSubmit(n => n + 1));
    }, []);
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <span>Toggle: </span>
          <span>{options.toggle ? 'on' : 'off'}</span>
        </div>
        <div className={classes.content}>
          <span>Custom Toggle: </span>
          <span>{toggle ? 'on' : 'off'}</span>
        </div>
        <div className={classes.content}>
          <span>Clicked: </span>
          <span>{click} times</span>
        </div>
        <div className={classes.content}>
          <span>Changed: </span>
          <span>{change} times</span>
        </div>
        <div className={classes.content}>
          <span>Focussed: </span>
          <span>{focus} times</span>
        </div>
        <div className={classes.content}>
          <span>Blurred: </span>
          <span>{blur} times</span>
        </div>
        <div className={classes.content}>
          <span>Submitted: </span>
          <span>{submit} times</span>
        </div>
      </div>
    );
  })(),
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
      content: {
        margin: '0.5rem 0',
      },
    };
  },
}))();
