(() => ({
  name: '@betty-blocks/default/Form',
  icon: 'FormIcon',
  category: 'FORM',
  type: 'FORM',
  allowedTypes: [
    'DATE_PICKER',
    'DATE_TIME_PICKER',
    'TIME_PICKER',
    'NUMBER_INPUT',
    'PASSWORD_INPUT',
    'DROPDOWN',
    'MULTISELECT',
    'CHECKBOX',
    'TEXT_INPUT',
    'TEXT_AREA',
    'PRICE_INPUT',
    'EMAIL_INPUT',
    'RADIO_BUTTON_GROUP',
    'FILE_INPUT',
    'IMAGE_INPUT',
    'SUBMIT_BUTTON',
    'ALERT',
    'TEXT',
    'BUTTON',
    'DIVIDER',
    'IMAGE',
    'CONTAINER_COMPONENT',
    'FORM_COMPONENT',
    'CONTENT_COMPONENT',
  ],
  orientation: 'HORIZONTAL',
  jsx: (
    <div className={classes.root}>
      {(() => {
        const { Action, Children } = B;
        const { actionId } = options;
        const [state, setState] = useState({});

        return (
          <Action actionId={actionId}>
            {(callAction, { data }) => {
              if (
                data &&
                data[`action${actionId}`] &&
                data[`action${actionId}`].token
              ) {
                localStorage.setItem('TOKEN', data[`action${actionId}`].token);
              }
              return (
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    callAction({ variables: { input: { variables: state } } });
                  }}
                  className={classes.form}
                >
                  <Children state={state} setState={setState}>
                    {children}
                  </Children>
                </form>
              );
            }}
          </Action>
        );
      })()}
    </div>
  ),
  styles: () => () => {},
}))();
