import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, postNewVideogame } from '../redux/actions';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import s from './Form.module.css';



const Form = ()=> {
    
    const dispatch = useDispatch();
    const genres = useSelector((state)=> state.genres);
    // const allVideogames = useSelector((state)=> state.allVideogames);
    //const [errors, setErrors] = useState({});
    const platforms = [
        'PC',
        'Linux',
        'Xbox One',
        'PlayStation 4',
        'PlayStation 5',
        'Wii U',
        'Nintendo Switch',
        'Mac OS',
        'iOS',
        'Nintendo 3DS',
        'Android',
        'Steam Deck', 
    ];

    const [form, setForm] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        platforms:[],
        genres:[],
        image:''
    }) 

    useEffect(()=>{
        if(!genres.length) dispatch(getGenres());
        // dispatch(getPlatforms());
    //    dispatch(getAllVideogames());
    }, [dispatch])

    const handleChange =(e)=> {
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]:value
        })
    }
    
    const  handleGenres =(e)=> {
        const value = e.target.value;
        if(!form.genres.includes(value)) {
          setForm({
            ...form,
            genres: [...form.genres, value],
          })
        }
      }

    const  handlePlatforms =(e)=> {
        const value = e.target.value;
        if(!form.platforms.includes(value)) {
          setForm({
            ...form,
            platforms: [...form.platforms, value],
          })
        }
      }
    
    const handleDeleteGenre =(e)=> {
        setForm({
            ...form,
            genres: form.genres.filter((g)=> g !==e),
          })
        }
        
    const handleDeletePlatform =(e)=> {
        setForm({
            ...form,
            platforms: form.platforms.filter((p)=> p !==e),
          })
        }
        
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
    <>
        
        {/* <a href='./enlaces.html' target='_self'>Back</a> */}
        {/* <div>
            <Link to='/videogames'><button>X</button></Link>
        </div> */}
        <Nav/>
        <div className={s.form__page}>
        <form className={s.form__container} autoComplete='off' onSubmit={submitHandler}>
        
            
            <h2 className={s.form__title}>CREATE YOUR VIDEOGAME</h2>

            <div>
            <label className={s.form__label}>Name:</label>
            <input
                type='text' 
                name='name'  
                placeholder='name' 
                value={form.name} 
                onChange={handleChange}
                className={s.form__input}
            />
            </div>
            
            <br></br>
            <div>
            <label className={s.form__label}>Released Date:</label>
            <input 
                type='text' 
                name='released' 
                placeholder='released' 
                value={form.released} 
                onChange={handleChange}
                className={s.form__input}
            />
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Rating:</label>
            <input 
                type='number' 
                name='rating' 
                placeholder='0.00' 
                value={form.rating} 
                onChange={handleChange}
                className={s.form__input}
            />
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Image:</label>
            <input 
                type='text'
                name='image' 
                placeholder='https://url.jpg' 
                accept='.jpg, .jpeg, .png, .webp'
                onChange={handleChange}
                className={s.form__input}
            />
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Description:</label>
            <textarea
                type='text' 
                name='description' 
                placeholder='(max 255 characters)' 
                cols='30'
                rows='5'
                value={form.description} 
                onChange={handleChange}
                className={s.form__textbox}
            />
            </div>

            <br></br>
            <div>
            {/* <label className={s.form__labelSelectP}>Select Platforms:</label> */}
                <select
                    className={s.form__selectP} 
                    id='plat'
                    value='title'
                    onChange={handlePlatforms}
                    >
                    <option disabled value='title'>Select Platforms</option>               
                        {platforms.map((p)=> {
                        return (
                        <option 
                        key={p.id} 
                        value={p.name}>{p}</option>
                        )
                        })}
                </select>
            </div>

            <br></br>
            <div>
            {/* <label className={s.form__labelSelectG}>Select Genres:</label> */}
                <select 
                className={s.form__selectG} 
                id='gen'
                value='title'
                onChange={handleGenres}>
                    <option disabled value='title'>Select Genres</option>
                        {genres.map((g)=> {
                        return (
                        <option 
                        key={g.id} 
                        value={g.name}>{g.name}</option>
                        )
                        })}
                </select>
            </div>

            <br></br>
            <div className={s.form__selectedP}>
            <label>Selected Platforms:</label>
            {form.platforms.map((p)=> (
                <div className={s.options__label}>
                <div className={s.options__selectedP}>{p}</div>
                <button 
                className={s.options__btn}
                key={p} 
                value={p} 
                onClick={()=>handleDeletePlatform(p)}><span>x</span></button>
                </div>
	        ))}
	        </div>

            <br></br>
            <div className={s.form__selectedG}>
            <label>Selected Genres:</label>
            {form.genres.map((g)=> (
                <div className={s.options__label}>
                <div className={s.options__selectedG}>{g}</div>
                <button 
                className={s.options__btn}
                key={g} 
                value={g} 
                onClick={()=>handleDeleteGenre(g)}><span>x</span></button>
                </div>
            ))}
            </div>           

            <br></br>
            <div>
            <input className={s.reset} type='reset' value='RESET'/>
            <input className={s.submit} type='submit' value='SUBMIT'/>
            </div>
        </form>
        </div>
    </>
    )

}

//{ name, genres, description, released, rating, platforms, background_image } ver si es image o background_image
//De donde viene el body que yo le mando al servidor en los post? axios.post manda un body, ese body es el estado
//que controla el formulario. Cuando se haga el submit mandar un objeto a nuestra ruta post con axios.

export default Form;