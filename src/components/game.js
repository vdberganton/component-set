(() => ({
  name: 'Game',
  icon: 'GameIcon',
  type: 'GAME',
  category: 'CONTENT',
  orientation: 'VERTICAL',
  allowedTypes: [],
  jsx: (() => {
    (() => {})();
    return (
      <div className={classes.game}>
        <Grommet.Button
          icon={<Icons.Gamepad size="xlarge" />}
          onClick={() => {}}
        />
      </div>
    );
  })(),
  styles: () => () => {
    (() => {})();
    return {
      game: {
        background: '#00ff80',
        borderRadius: '0.25rem',
      },
    };
  },
}))();
