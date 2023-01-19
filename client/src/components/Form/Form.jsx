import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../redux/actions';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import s from './Form.module.css';
import axios from 'axios';


function validate (form) {
    let errors = {}

    if(!form.name) {
      errors.name = 'Name is required'
    } else if(!/^[a-zA-Z0-9-() .]+$/.test(form.name)){
      errors.name = 'Only letters, numbers, hypens(-), and parentheses are accepted'
    }

    if(!form.background_image){
      errors.background_image = 'Image is required'
    } else if(form.background_image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(form.background_image)){
      errors.background_image='Invalid URL'
    }

  
    if(!form.description) {
      errors.description = 'Description is required'
    } else if (form.description.length > 255) {
      errors.description = 'Description is too long. (Max = 255 caracteres)'
    }

    if(!form.released) {
      errors.released = 'Released date is required'
    }

    if(!form.rating) {
      errors.rating = 'Rating is required'
    } else if(form.rating > 5) {
      errors.rating = 'Rating cant be higher than 5'
    } else if(form.rating < 0) {
      errors.rating = 'Rating cant be a negative number'
    }

    if(!form.genres) {
      errors.genres = 'At least 1 genre is required'
    }
    
    if(!form.platforms) {
      errors.platforms = 'At least 1 platform is required'
    }


    return errors
  }

const Form = ()=> {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state)=> state.genres);
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
        background_image:''
    })

    const [errors, setErrors] = useState({
    });

    useEffect(()=>{
      dispatch(getGenres());
    }, [dispatch])

    const handleChange =(e)=> {
        const property = e.target.name;
        const value = e.target.value;

        setForm({
            ...form,
            [property]:value
        })
        setErrors(validate({
            ...form,
            [property]:value
        }))
    }

    const  handleGenres =(e)=> {
        const value = e.target.value;
        if(!form.genres.includes(value)) {
          setForm({
            ...form,
            genres: [...form.genres, value],
          })
        }
        setErrors(
            validate({
              ...form,
              genres: [...form.genres, value],
            })
          );

      }

    const  handlePlatforms =(e)=> {
        const value = e.target.value;
        if(!form.platforms.includes(value)) {
          setForm({
            ...form,
            platforms: [...form.platforms, value],
          })
        }
        setErrors(
            validate({
              ...form,
              platforms: [...form.platforms, value],
            })
          );

      }

    const handleDeleteGenre =(e)=> {
        setForm({
            ...form,
            genres: form.genres.filter((g)=> g !== e),
          })
        }

    const handleDeletePlatform =(e)=> {
        setForm({
            ...form,
            platforms: form.platforms.filter((p)=> p !== e),
          })
        }

    const submitHandler=(e)=> {
        e.preventDefault()
        if(Object.keys(errors).length > 0){
          alert('You need to fill all mandatory fields correctly before submitting');
        } else { 
        axios
        .post('http://localhost:3001/videogames', form)
        .then(() =>{
            alert(`El videogame ${form.name} was created successfully`);
            setForm({
              name: '',
              rating: '',
              released: '',
              description: '',
              genres: [],
              platforms: [],
        })})
        history.push('/videogames');
        history.go(0)
      }
        
    }

    return(
    <>

        <Nav/>
        <div className={s.form__page}>
        <form className={s.form__container} autoComplete='off' onSubmit={submitHandler}>

        <Link to='/videogames'><button className={s.back__btn}>X</button></Link>
            <h2 className={s.form__title}>CREATE YOUR VIDEOGAME</h2>

            <div>
            <label className={s.form__label}>Name:</label>
            <input
                type='text'
                required
                name='name'
                placeholder='name'
                value={form.name}
                onChange={handleChange}
                className={s.form__input}
            />
            {errors.name && (<p className={s.error__form}>{errors.name}</p>)}
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Released Date:</label>
            <input
                type='date'
                name='released'
                placeholder='yyyy-mm-dd'
                min='1970-01-01'
				        max='2023-02-01'
                value={form.released}
                onChange={(e) =>handleChange(e)}
                className={s.form__date}
            />
            {errors.released && (<p className={s.error__form}>{errors.released}</p>)}
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Rating:</label>
            <input
                type='number'
                name='rating'
                placeholder='0.00'
                value={form.rating}
                onChange={(e) =>handleChange(e)}
                className={s.form__input}
            />
            {errors.rating && (<p className={s.error__form}>{errors.rating}</p>)}
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Image:</label>
            <input
                type='text'
                name='background_image'
                placeholder='https://url.jpg'
                accept='.jpg, .jpeg, .png, .webp'
                onChange={(e) =>handleChange(e)}
                className={s.form__input}
            />
            {errors.background_image && (<p className={s.error__form}>{errors.background_image}</p>)}
            </div>

            <br></br>
            <div>
            <label className={s.form__label}>Description:</label>
            <textarea
                type='text'
                name='description'
                placeholder='(Max = 255 caracteres)'
                cols='30'
                rows='5'
                value={form.description}
                onChange={(e) =>handleChange(e)}
                className={s.form__textbox}
            />
            {errors.description && (<p className={s.error__form}>{errors.description}</p>)}
            </div>

            <br></br>
            <div>
            {/* <label className={s.form__labelSelectP}>Select Platforms:</label> */}
                <select
                    className={s.form__selectP}
                    id='plat'
                    value='title'
                    onChange={(e) =>handlePlatforms(e)}
                    >
                    <option disabled value='title'>Select Platforms</option>
                        {platforms.map((p,i)=> {
                        return (
                        <option
                        key={i}
                        value={p}>{p}</option>
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
                onChange={(e) =>handleGenres(e)}>
                    <option disabled value='title'>Select Genres</option>
                        {genres.map((g)=> {
                        return (
                        <option
                        key={g.id}
                        value={g.id}>{g.name}</option>
                        )
                        })}
                </select>
            </div>

            <br></br>
            <div className={s.form__selectedP}>
            <label>Selected Platforms:</label>
            {form.platforms?.map((e)=> (
                <div className={s.options__label}>
                <div className={s.options__selectedP}>{e}</div>
                <button
                className={s.options__btn}
                onClick={()=>handleDeletePlatform(e)}><span>x</span></button>
                </div>
	        ))}
	        </div>

            <br></br>
            <div className={s.form__selectedG}>
            <label>Selected Genres:</label>
            {form.genres.map((e, i)=> (
                <div className={s.options__label}>
                <div className={s.options__selectedG}>{genres && genres.find(gen => gen.id == e).name}</div>
                <button
                key = {i}
                className={s.options__btn}
                onClick={()=>handleDeleteGenre(e)}><span>x</span></button>
                </div>
            ))}
            </div>

            <br></br>
            <div>
            <input className={s.submit} disabled={Object.keys(errors).length > 0} type='submit' value='SUBMIT'/>
            </div>
        </form>
        </div>
    </>
    )

}

export default Form;