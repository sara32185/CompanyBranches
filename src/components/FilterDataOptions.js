import React from "react";
import DropDown from "./Elements/DropDown";
import SearchInput from "components/Elements/Input";
import useBL from "hooks/BL.hook";
import { WrapFilterElements } from './Elements/Style'
import { Icons } from 'utils/Icons'

const FilterDataOptions = () => {
    const {
        setFilterDataBy,
        areas,
        cities,
        filterDataBy
    } = useBL()
    const onChange = (value, id) => {
        setFilterDataBy({ "key": id, "value": value })
    }

    return (
        <WrapFilterElements>
            <div><DropDown
                label="Area"
                options={areas || []}
                id="area"
                onChange={onChange}
                value={filterDataBy.area}

            />
            </div>
            <DropDown
                options={cities || []}
                label="City"
                id="city"
                onChange={onChange}
                value={filterDataBy.city}


            />
            <SearchInput
                Icon={Icons.search}
                label="search"
                id={"search"}
                onChange={onChange}
                value={filterDataBy.search}
            />
        </WrapFilterElements>
    )

}

export default FilterDataOptions