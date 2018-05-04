import { PortfolioTexts } from '../consts';

const INITIAL_STATE = {
  homeTitle: 'I\'m Vadym Lytvyn',
  homeText: 'I want to start a career in IT with the ability to demonstrate their knowledge and gain new ones. I love programming (C#, java). Like to solve interesting problems. I love to read books on programming. Let\'s start scrolling and learn more about me.',
};

export default function (
  state = INITIAL_STATE,
  action = { type: '', payload: null }
) {
  switch (action.type) {
    case PortfolioTexts.GET_HOME_TEXT:
      return state.merge(fromJS({ showDatabaseDialog: action.payload.show }));
    default:
      return state;
  }
}
