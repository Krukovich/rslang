export const BTN_LABEL = {
  NEXT: 'Дальше',
  CHECK: 'Проверить',
  PREV: 'Назад',
}

export const MAX_PAGE = 20;

export const POINT = 10;

export const LOGIN = {
  ON: 'Authenticated',
}

export const SOUND = {
  CORRECT: 'audio/correct.mp3',
  ERROR: 'audio/error.mp3'
}

const PASSWORD_PATTERN_REGEXP =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_+-.,[{:;\}\]])[A-Za-z\d@$!%*#?&_+-.,[{:;\}\]]{8,}$/;
export const API_LINK = 'https://afternoon-falls-25894.herokuapp.com/';

export const PASSWORD_PATTERN = PASSWORD_PATTERN_REGEXP.toString().slice(1).slice(0, -1);

export const PASSWORD_REQUIREMENTS = "Пароль должен содержать одну цифру, один спецсимвол из +-_@$!%*?&#.,;:[]{} и одну заглавную букву";
