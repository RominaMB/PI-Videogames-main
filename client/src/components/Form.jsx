import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
//import { useEffect } from 'react'; 
import { useState } from 'react';
import { getAllVideogames, getGenres, getPlatforms } from '../redux/actions';
import Nav from './Nav';
import axios from 'axios';


const Form = ()=> {
    
    const dispatch = useDispatch();
    // const genres = useSelector((state)=> state.genres);
    // const platforms = useSelector((state)=> state.platforms);
    // const allVideogames = useSelector((state)=> state.allVideogames);
    //const [errors, setErrors] = useState({});
    const genres = useSelector((state)=> state.genres);
    const [form, setForm] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        platforms:[],
        image:''
    }) 

    useEffect(()=>{
    //    dispatch(getAllVideogames());
    if(!genres.length) dispatch(getGenres());
    //    dispatch(getPlatforms())
    }, [dispatch])

    const handleChange =(e)=> {
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]:value
        })
    }

    // const  handleGenres =(e)=> {
    //     const value = e.target.value;
    //     if(!input.genres.includes(value)) {
    //       setInput({
    //         ...input,
    //         genres: [...input.genres, value],
    //       })
    //     }
    //   }

    //   const  handlePlatforms =(e)=> {
    //     const value = e.target.value;
    //     if(!form.platforms.includes(value)) {
    //       setForm({
    //         ...form,
    //         platforms: [...form.genres, value],
    //       })
    //     }
    //   }

    //axios.post('url',form)

    const submitHandler=(e)=> {
        e.preventDefault();
        axios.post('http://localhost:3001/videogames', form)
        .then()
    }


//nombre que le quiero dar al estado, nombre que le quiero dar a la funcion que puede cambiar el estado.
//el formulario se controla con el estado porque el formulario setea el estado y a su vez el formulario toma el valor
//del estado que setea.
//el evento tiene una propiedad que se llama target que indica quien disparo el evento.
//value es lo que esta escrito --> value es el estado. Yo quiero que lo que el usuario escriba sea el estado.
//el prevent default van en el submit del formulario, no en los handlers.

    return(
    <body>
        {/* <a href='./enlaces.html' target='_self'>Back</a> */}

        <form autoComplete='off' onSubmit={submitHandler}>
        
            <Nav/>
            <h2>CREATE YOUR VIDEOGAME</h2>
            
            <div>
            <label for='name'>Name:</label>
            <input
                type='text' 
                name='name'  
                placeholder='name' 
                value={form.name} 
                onChange={handleChange}
            />
            </div>
            
            <br></br>
            <div>
            <label for='released'>Released Date:</label>
            <input 
                type='text' 
                name='released' 
                placeholder='released' 
                value={form.released} 
                onChange={handleChange}
            />
            </div>

            <br></br>
            <div>
            <label for='rating'>Rating:</label>
            <input 
                type='number' 
                name='rating' 
                placeholder='0.00' 
                value={form.rating} 
                onChange={handleChange}
            />
            </div>

            <br></br>
            <div>
            <label for='description'>Description:</label>
            <textarea
                type='text' 
                name='description' 
                placeholder='(max 255 characters)' 
                cols='30'
                rows='5'
                value={form.description} 
                onChange={handleChange}
            />
            </div>

            <br></br>
            <div>
            <label for='platforms'>Plataforms:</label>
                <select name='platforms'>
                    <option value='0' disabled>Plataforms</option>               
                    <option value='1'>PC</option>
                    <option value='2'>Linux</option>
                    <option value='3'>Xbox One</option>
                    <option value='4'>PlayStation 4</option>
                    <option value='5'>PlayStation 5</option>
                    <option value='6'>Wii U</option>
                    <option value='7'>Nintendo Switch</option>
                    <option value='8'>Mac OS</option>
                    <option value='9'>iOS</option>
                    <option value='10'>Nintendo 3DS</option>
                    <option value='11'>Android</option>
                    <option value='12'>Steam Deck</option>
                </select>
            </div>

            <br></br>
            <div>
            <label>Genres:</label>
                <select name='genres'>
                    <option value='0' disabled>Genres</option>
                </select>
            </div>

            <br></br>
            <div>
            <label for='image'>Image:</label>
            <input 
                type='file'
                name='image' 
                accept='.jpg, .jpeg, .png, .webp'
                onChange={handleChange}
            />
            </div>

            <br></br>
            <div>
            <input type='reset' value='RESET'/>
            <input type='submit' value='SUBMIT'/>
            </div>
        </form>
    </body>
    )
}

//{ name, genres, description, released, rating, platforms, background_image } ver si es image o background_image
//De donde viene el body que yo le mando al servidor en los post? axios.post manda un body, ese body es el estado
//que controla el formulario. Cuando se haga el submit mandar un objeto a nuestra ruta post con axios.

export default Form;