import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, orderBy, filterBySource, filterByGenre, filterRemove } from '../redux/actions';

const OrdersFilters = () => {

        const dispatch = useDispatch();
        const genres = useSelector((state)=> state.genres);
        const [genreSelect, setGenreSelect] = useState();

        const handleSort = (e)=> {
                //if() return dispatch(filterRemove());
                dispatch(orderBy(e.target.value))
        }

        const handleSource = (e)=> {
                dispatch(filterBySource(e.target.value))
        }

        const handleGenre = (e)=> {
                e.preventDefault();
                setGenreSelect(e.target.value)
                dispatch(filterByGenre(e.target.value));
        }

        useEffect(()=> {
                dispatch(getGenres())
        }, [dispatch])

        return (
                <div>
                        <select 
                        defaultValue='All'
                        onChange={handleSort}>

                                <option disabled value='All' >Order by...</option>
                                <option value='A-Z' >A-Z</option>
                                <option value='Z-A' >Z-A</option>
                                <option value='AscRating'>+ Rating</option>
                                <option value='DescRating'>- Rating</option>
                        </select>

                         <select 
                        value={genreSelect}
                        onChange={handleSource}>

                                <option disabled value='title' >Filter by Source</option>
                                <option name='All'>All Videogames</option>
                                <option value='api'>From our List</option>
                                <option value='uuid'>Created by Users</option>
                        </select>

                        <select 
                        value={genreSelect}
                        onChange={handleGenre}>

                                <option disabled value='title'>Filter by Genres</option>
                                        <option name='All'>All Genres</option>
                                        {genres.map((genre)=> {
                                        return (
                                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                                        )
                                })}
                        </select>

                </div> 
        )
}

export default OrdersFilters;
