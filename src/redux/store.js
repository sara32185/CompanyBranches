import {
    createStore,
    applyMiddleware
} from 'redux';

import appReducers from './reducers/appReducers';

import {
    getCompanyBranches
} from './applyMiddleware/crud.data';

const store = createStore(
    appReducers,
    applyMiddleware(
        getCompanyBranches
    )
)

export default store;