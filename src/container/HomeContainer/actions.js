import axios from "axios";

export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list: []) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}
export function fetchList(url: any) {
	return dispatch => {

        axios.get(url)
            .then(function (response) {
                dispatch(fetchListSuccess(response.data));
                dispatch(listIsLoading(false));
            })
            .catch(function (error) {

            });
	};
}

export function loading(what: boolean) {
	return dispatch => {
        dispatch(listIsLoading(what));
	};
}
