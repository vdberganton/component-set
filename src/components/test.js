(() => ({
  name: 'Test',
  icon: 'TestIcon',
  type: 'TEST',
  category: 'CONTENT',
  orientation: 'VERTICAL',
  allowedTypes: [],
  jsx: (() => {
    const { Button, Grommet: G } = Grommet;
    const { Gamepad } = Icons;

    const theme = {
      global: {
        colors: {
          main: '#7d4cdb',
          custom: '#80ff00',
        },
        font: {
          family: 'Roboto',
          size: '1rem',
        },
      },
    };

    const sizes = {
      XS: 'xsmall',
      S: 'small',
      M: 'medium',
      L: 'large',
      XL: 'xlarge',
    };

    const Custom = styled.button`
      display: inline-block;
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
      <section>
        <G theme={theme} className={classes.root}>
          <Button
            className={classes.button}
            icon={
              <Gamepad size={sizes[options.size]} className={classes.icon} />
            }
            onClick={() => {}}
          />
          <Button color="custom">Hoi</Button>
          <Custom className={classes.custom}>Button</Custom>
          <Custom fill>Button</Custom>
          <Custom color="#00d060">Button</Custom>
          <Custom fill color="#00d060">
            Button
          </Custom>
        </G>
      </section>
    );
  })(),
  styles: B => t => {
    const style = new B.Styling(t);

    const sizes = {
      XS: '0.5rem',
      S: '1rem',
      M: '1.5rem',
      L: '2rem',
      XL: '2.5rem',
    };

    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        // background: '#00ff80',
        background: ({ options: { background } }) => style.getColor(background),
      },
      custom: {
        color: '#fff',
        borderRadius: '1rem',
        background: ({ options: { color } }) => style.getColor(color),
        borderColor: ({ options: { color } }) => style.getColor(color),
        fontSize: ({ options: { size } }) => sizes[size],
      },
      button: {
        display: 'flex',
        justifyContent: 'center',
      },
      icon: {
        fill: ({ options: { color } }) => style.getColor(color),
        stroke: ({ options: { color } }) => style.getColor(color),
      },
    };
  },
}))();
