import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'
const useBL = () => {

    const dispatch = useDispatch()

    const getCompanyBranches = () => dispatch(actions.getCompanyBranches())
    const setFilterDataBy = (obj) => dispatch(actions.setFilterDataBy(obj))
    const setCities = () => dispatch(actions.setCities(data))
    const setShowLoading = (bool) => dispatch(actions.setShowLoading(bool))
    const setData = () => dispatch(actions.setData(data))
    const {
        data,
        areas,
        cities,
        filterDataBy,
        snackBarObj,
        showLoading
    } = useSelector(state => state.DataReducer)

    return {
        getCompanyBranches,
        setFilterDataBy,
        setCities,
        setData,
        setShowLoading,
        data,
        areas,
        cities,
        filterDataBy,
        snackBarObj,
        filterDataBy,
        showLoading
    }
}

export default useBL;