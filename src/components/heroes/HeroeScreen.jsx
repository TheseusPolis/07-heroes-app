import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({ history }) => {

    const { heroeId } = useParams();
    
    const hero = useMemo(() => getHeroeById( heroeId ), [heroeId])

    if ( !hero ) {
        return <Redirect to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn = () => {
        (history.length) <= 2 ? checkPublisher() : history.goBack();
    }

    const checkPublisher = () => {
        publisher === 'DC Comics'? history.push('/dc') : history.push('/');
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`../assets/heroes/${ heroeId }.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero } />
                </div>
                <div className="col-8">
                    <h3> { superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item list-bckgrnd"> <b className="list-bckgrnd"> Alter ego: </b> { alter_ego }</li>
                        <li className="list-group-item list-bckgrnd"> <b className="list-bckgrnd"> Publisher: </b> { publisher }</li>
                        <li className="list-group-item list-bckgrnd"> <b className="list-bckgrnd"> First Appearance: </b> { first_appearance }</li>
                    </ul>
                    <h5>Characters</h5>
                    <p>{characters}</p>

                </div>
            </div>
            <br/>
            <button 
                className="btn btn-outline-light"
                onClick={ handleReturn }
            >
                Return
            </button>
            <br />
            <br />
        </div>
    )
}
