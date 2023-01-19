import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/actions';
import s from './Paginated.module.css';

const Paginated = ()=> {
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.allVideogames);
    const videogamesPerPage = useSelector((state) => state.videogamesPerPage);
    const currentPage = useSelector((state) => state.currentPage);
   
    const pageNumbers = [];
    const allData = allVideogames.length;
    for (let i = 1; i <= Math.ceil(allData / videogamesPerPage); i++) {
        pageNumbers.push(i);
    }

    //    100   /      15               
    // (allData/videogamesPerPage) = 7 
    // Voy a ir agregando num de paginas al array mientras el num sea menor o igual a 7.
    // entonces pageNumbers=[1,2,3,4,5,6,7]
   
    function handlerChangePage (e) {
        dispatch(changePage(e.target.value))
       
    }
   
    return (
        <div className={s.paginated}>
            <div className={s.button__container}>
                 {pageNumbers && currentPage > 1 ? <button  className={s.prev__button} value= 'Prev' onClick={handlerChangePage}>Prev</button> : null}  
                
                    {pageNumbers?.map(number => (            
                        <button key={number} className={currentPage === number ? s.current__button : s.button} value={number} onClick={handlerChangePage}>{number}</button>
                    ))}
              
                 {pageNumbers && currentPage < pageNumbers.length ? <button className={s.next__button} value = 'Next' onClick={handlerChangePage}>Next</button> : null} 
            </div>
        </div>
    )
}

export default Paginated;