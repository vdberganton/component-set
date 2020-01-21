(() => ({
  name: '@betty-blocks/default/TextInput',
  icon: 'TextInputIcon',
  category: 'FORM',
  type: 'TEXT_INPUT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.root}>
      {(() => {
        const { getActionInput } = B;
        const { actionInputId, label, required } = options;

        const input = getActionInput(actionInputId);
        const value = input ? parent.state[input.name] : '';

        return (
          <label>
            {label}
            <input
              type="text"
              value={value}
              onChange={({ target: { value } }) => {
                if (input) {
                  parent.setState({
                    ...parent.state,
                    [input.name]: value,
                  });
                }
              }}
              required={required}
            />
          </label>
        );
      })()}
    </div>
  ),
  styles: () => () => {},
}))();
