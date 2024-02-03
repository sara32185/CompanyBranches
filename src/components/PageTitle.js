import React from 'react'
import { StyledPageTitle } from './Elements/Style'
import { Icons } from 'utils/Icons'
import { Colors } from 'utils/Colors'

const PageTitle = (props) => {

    return (
        <StyledPageTitle color={Colors.primaryColor}><Icons.store /> <h2>Comapny Branches</h2> </StyledPageTitle>
    )
}

export default PageTitle