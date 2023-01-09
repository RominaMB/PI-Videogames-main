import React from 'react';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { orderBy } from '../redux/actions';


const Filters = () => {

    const dispatch = useDispatch() 
    const handleSort = (e)=> {
        if(e.target.name === 'alphabetical'){
            dispatch(orderBy(e.target.value))
        }
    }
    return (
            <div>
                    <select 
                        id='sortABC'
                        name='alphabetical' 
                        defaultValue='title'
                        onChange={e => handleSort(e)}>

                            <option disabled value='title' >Order by...</option>
                            <option value='A-Z' >A-Z</option>
                            <option value='Z-A' >Z-A</option>
                            
                    </select>

            </div> 
    )
}

export default Filters;
