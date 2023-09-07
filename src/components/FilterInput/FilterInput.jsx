import { Input } from "./FilterInput.styled";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { completeFilter } from '../../Store/phonebookSlice';

const FilterInput = () => {

    const dispatch = useDispatch();


    const handleFilterChange = e => {
        dispatch(completeFilter(e.target.value))
    }

    return (
        <div>
            <span >{"Find contact by name"}</span>
            <Input type="text" name="filter" onChange={handleFilterChange}></Input>
        </div>
        
    )
}

export default FilterInput

FilterInput.propTypes = {
    onChange: PropTypes.func,
}