import './App.css';
import { useEffect } from 'react';
import useBL from 'hooks/BL.hook';
import PageTitle from 'components/PageTitle';
import BranchesTable from 'components/BranchesTable';
import FilterDataOptions from 'components/FilterDataOptions';
import StyledSnackBar from 'components/Elements/SnackBar';

function App(props) {
  const { getCompanyBranches,
    filterDataBy,
    data,
    setCities,
    setData,
    snackBarObj,
    setShowLoading
  } = useBL()

  useEffect(() => {
    setShowLoading(true)
    getCompanyBranches()
  }, [])

  useEffect(() => {
    if (data) {
      setCities()
      setData()
    }
  }, [filterDataBy])


  return (
    <>
      <PageTitle />
      <FilterDataOptions />
      <BranchesTable />
      <StyledSnackBar
        {...snackBarObj}
      />
    </>
  );
}

export default App;
