import Alert from 'react-s-alert';

/* eslint-disable no-console */
export default () => next => (action) => {
  try {
    const actionResult = next(action);
    const error = actionResult.err || actionResult.error;
    if (error) {
      console.error(error);
      Alert.error(`${actionResult.type}. ${error}`);
    }
    return actionResult;
  } catch (error) {
    console.error('caughtAnException', error);
    Alert.error(`${'caughtAnException'}. ${error}`);
  }
  return {
    type: action.type,
    err: 'caughtAnException',
  };
};
