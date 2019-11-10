// Don't use "commands": actions should describe what happened!
export const COUNTER_BUTTON_CLICKED = 'COUNTER_BUTTON_CLICKED';

export const counterButtonClick = () => ({
  type: COUNTER_BUTTON_CLICKED,
  payload: {},
});
