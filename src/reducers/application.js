import { SHOP } from '../constants/application'

const application = (state = [], {type, payload}) => {
  switch (type) {
    case SHOP:
      return [];
    default:
      return state;
  }
};

export default application;