import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderBy, filterBySource, filterByGenre, getGenres } from '../redux/actions';


const Sort = () => {

        const dispatch = useDispatch() 
        const genres = useSelector((state)=> state.genres)
        console.log(genres)

        const handleSort = (e)=> {
                dispatch(orderBy(e.target.value))
        }

        const handleSource = (e)=> {
                dispatch(filterBySource(e.target.value))
        }

        const handleGenre = (e)=> {
                dispatch(filterByGenre(e.target.value))
        }

        useEffect(()=> {
                dispatch(getGenres)
        }, [dispatch])
        console.log(genres)

        return (
                <div>
                        <select 
                        defaultValue='title'
                        onChange={handleSort}>

                                <option disabled value='title' >Order by...</option>
                                <option value='A-Z' >A-Z</option>
                                <option value='Z-A' >Z-A</option>
                                <option value='AscRating'>+ Rating</option>
                                <option value='DescRating'>- Rating</option>
                        </select>

                         <select 
                        defaultValue='title'
                        onChange={handleSource}>

                                <option disabled value='title' >Filter by Source</option>
                                <option value='api'>From our List</option>
                                <option value='created'>Created by Users</option>
                        </select>

                        <select 
                        id='genre'
                        defaultValue='title'
                        onChange={handleGenre}>

                                <option disabled value='title' >Filter by Genre</option>
                                        {genres.map((g)=> {
                                        return (
                                        <option key={g.id} value={g.name}>{g.name}</option>
                                        )
                                })}
                        </select>

                </div> 
        )
}

export default Sort;
