(() => ({
  name: 'Test',
  icon: 'TestIcon',
  type: 'TEST',
  category: 'CONTENT',
  orientation: 'VERTICAL',
  allowedTypes: [],
  jsx: (() => {
    const { Button } = Grommet;
    const { Gamepad } = Icons;

    const Custom = styled.button`
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      border: 0.125rem solid #000;
      border-radius: 0.125rem;
      background: transparent;
      color: #000;
      font: 1rem Roboto, sans-serif;

      ${props =>
        props.primary &&
        css`
          background: #000;
          color: #fff;
        `}
    `;

    return (
      <section className={classes.test}>
        <Button icon={<Gamepad size="xlarge" />} onClick={() => {}} />
        <Custom>Button</Custom>
        <Custom primary>Button</Custom>
      </section>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      test: {
        // background: '#00ff80',
        background: ({ options: { color } }) => style.getColor(color),
        borderRadius: '0.25rem',
      },
    };
  },
}))();
