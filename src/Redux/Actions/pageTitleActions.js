import { SET_TITLE } from 'Redux/Types/pageTitle';

const pageTitleActions = {
  setPageTitle: title => {
    return {
      type: SET_TITLE,
      title
    };
  }
};

export default pageTitleActions;
