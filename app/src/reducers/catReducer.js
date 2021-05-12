import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from '../actions/catAction'
const initialState = {
  cat: {
    data: {
        id: 14,
        url: "https://i.thatcopy.pw/cat/i787qpz.jpg",
        webpurl: "https://i.thatcopy.pw/cat-webp/i787qpz.webp",
        x: 36.58,
        y: 37.69,
      },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    }
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true
      })
    case(FETCH_SUCCESS):
      return({
        ...state,
        cat: action.payload,
        isFetching: false
      })
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};