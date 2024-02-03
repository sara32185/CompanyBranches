import axios from 'axios';
import actions from '../actions';
import { API_URL } from '../../config/Configurations';

export const getCompanyBranches = ({ dispatch, getState }) => next => action => {

    if (action.type === "GET_COMPANY_BRANCHES") {
        return axios(`${API_URL}`,
            {
                method: 'GET',
            }
        )
            .then(response => {
                dispatch(actions.setData(response.data))
                dispatch(actions.setAreas(response.data))
                dispatch(actions.setCities(response.data))
                dispatch(actions.setShowLoading(false))

            })
            .catch(error => {
                console.log(error);
                dispatch(actions.setSnackBarObj({
                    open: true,
                    message: error.message || "error",
                    severity: "error"
                }))
                dispatch(actions.setShowLoading(false))

            });
    }

    return next(action)
}











