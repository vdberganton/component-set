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

      ${({ color }) =>
        color &&
        css`
          color: ${color};
          border-color: ${color};
        `}

      ${({ fill, color = '#000' }) =>
        fill &&
        css`
          background: ${color};
          border-color: ${color};
          color: #fff;
        `}
    `;

    return (
      <section className={classes.test}>
        <Button icon={<Gamepad size="xlarge" />} onClick={() => {}} />
        <Custom>Button</Custom>
        <Custom fill>Button</Custom>
        <Custom color="#00ff80">Button</Custom>
        <Custom fill color="#00ff80">
          Button
        </Custom>
      </section>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    return {
      test: {
        padding: '0.5rem',
        borderRadius: '0.25rem',
        // background: '#00ff80',
        background: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
