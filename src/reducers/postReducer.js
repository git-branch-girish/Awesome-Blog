import { FETCH_POSTS, FETCH_POST_BY_ID, FETCH_COMMENTS_BY_ID } from '../actions/types';

const initialState = {
	items: [],
	article: {},
	comments: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};
		case FETCH_POST_BY_ID:
			return {
				...state,
				article: action.payload
			};
		case FETCH_COMMENTS_BY_ID:
			return {
				...state,
				comments: action.payload
			};
		default:
			return state;
	}
}
