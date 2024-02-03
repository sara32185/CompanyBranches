import produce from 'immer';
import createReducer from './reducerUtils';
import Branch from 'models/Branch';

const initialState = {
    data: null,
    areas: null,
    cities: null,
    snackBarObj: null,
    filterDataBy: {
        area: "",
        city: "",
        search: ""
    },
    showLoading: true
}

const data = {
    setData(state, action) {
        let tempData = []
        action.payload.map((_branch) => {
            let branch = new Branch(_branch)
            let display = true
            if (state.filterDataBy.area && branch.store_region !== state.filterDataBy.area) {
                display = false
            }
            else if (state.filterDataBy.city && branch.city !== state.filterDataBy.city) {
                display = false
            }
            else if (state.filterDataBy.search) {

                display = Object.values(branch).some(value =>
                    String(value).includes(state.filterDataBy.search)
                )
            }

            tempData.push({ ...branch, "display": display })
        })
        state.data = tempData
    },
    setAreas(state, action) {
        let tempAreas = []
        action.payload.map(branch => {
            if (!tempAreas.includes(branch.store_region)) {

                tempAreas.push(branch.store_region);
            }
        })
        state.areas = tempAreas
    },
    setCities(state, action) {
        let tempCities = []
        action.payload.map(branch => {
            if (!tempCities.includes(branch.city)) {
                if (state.filterDataBy.area && branch.store_region !== state.filterDataBy.area)
                    return
                else
                    tempCities.push(branch.city);
            }
        })
        state.cities = tempCities
    },
    setFilterDataBy(state, action) {
        const { key, value } = action.payload
        if (key == "area")
            state.filterDataBy = { ...state.filterDataBy, "city": "" }
        state.filterDataBy = { ...state.filterDataBy, [key]: value }
    },
    setSnackBarObj(state, action) {
        state.snackBarObj = action.payload
    },
    setShowLoading(state, action) {
        state.showLoading = action.payload
    },
}

export default produce((state, action) =>
    createReducer(state, action, data), initialState);