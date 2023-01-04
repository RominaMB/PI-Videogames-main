import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

const Form = ()=> {
    
    const [form, setForm] = useState({
        name:'',
        genres:[],
        description:'',
        released:'',
        rating:'',
        platforms:'',
        image:''
    }) 

    const handleChange =(e)=> {
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]:value
        })
    }

    //axios.post('url',form)

    const submitHandler=(e)=>{
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

        <form onSubmit={submitHandler}>
        
            <Nav/>
            <h2>CREAR VIDEOGAME</h2>
            
            <input type='text' name='name'  placeholder='name' value={form.name} onChange={handleChange}/>
            <input type='text' name='genres' placeholder='genres' value={form.genres}/>
            <input type='text' name='description' placeholder='description' value={form.description} onChange={handleChange}/>
            <input type='text' name='released' placeholder='released' value={form.released} onChange={handleChange}/>
            <input type='text' name='rating' placeholder='rating' value={form.rating} onChange={handleChange}/>
            <input type='text' name='platforms' placeholder='platforms'value={form.platforms} onChange={handleChange}/>
            <input type='text' name='image' placeholder='image'value={form.image} onChange={handleChange}/>
            <input type='submit' value='SUBMIT'/>
        </form>
    )
}

//{ name, genres, description, released, rating, platforms, background_image } ver si es image o background_image
//De donde viene el body que yo le mando al servidor en los post? axios.post manda un body, ese body es el estado
//que controla el formulario. Cuando se haga el submit mandar un objeto a nuestra ruta post con axios.

export default Form;