// Don't use "commands": actions should describe what happened!
export const COUNTER_BUTTON_CLICK = 'COUNTER_BUTTON_CLICK';

export const counterButtonClick = () => ({
  type: COUNTER_BUTTON_CLICK,
  payload: {},
});
