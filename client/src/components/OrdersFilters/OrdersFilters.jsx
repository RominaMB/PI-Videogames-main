import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, orderBy, filterBySource, filterByGenre } from '../../redux/actions';
import s from './OrdersFilters.module.css';

const OrdersFilters = () => {

        const dispatch = useDispatch();
        const genres = useSelector((state)=> state.genres);
        const [genreSelect, setGenreSelect] = useState();
        const [sourceSelect, setSourceSelect] = useState();

        const handleSort = (e)=> {
                dispatch(orderBy(e.target.value))
        }

        const handleSource = (e)=> {
                e.preventDefault();
                setSourceSelect(e.target.value)
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
                <div className={s.select__container}>
                        <select 
                        className={s.select__one}
                        defaultValue='All'
                        onChange={handleSort}>

                                <option disabled value='All' >Order by...</option>
                                <option value='A-Z' >A-Z</option>
                                <option value='Z-A' >Z-A</option>
                                <option value='AscRating'>+ Rating</option>
                                <option value='DescRating'>- Rating</option>
                        </select>

                        <select
                        className={s.select__two} 
                        value={sourceSelect}
                        onChange={handleSource}>

                                <option disabled value='' >Filter by Source</option>
                                <option name='All'>All Videogames</option>
                                <option value='api'>From our List</option>
                                <option value='uuid'>Created by Users</option>
                        </select>

                        <select
                        className={s.select__three} 
                        value={genreSelect}
                        onChange={handleGenre}>

                                <option disabled value=''>Filter by Genres</option>
                                        <option value='All Genres'>All Genres</option>
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
