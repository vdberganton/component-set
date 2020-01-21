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
        console.log(state);
        return (
          <Action actionId={actionId}>
            {(callAction, { loading, error, data }) => {
              console.log(loading);
              console.log(error);
              console.log(data);
              return (
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    callAction({ variables: { variables: state } });
                  }}
                  className={classes.form}
                >
                  <Children state={state} setState={setState}>
                    {children}
                  </Children>
                  <button>Submit</button>
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
