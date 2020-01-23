import React from 'react';
import FilmStyle from './film.module.scss';
import PropTypes from 'prop-types';

/**
 * Set up the film stateless component and recieve the specfic data from filmLists.js Component
 */

const film = ({
                     title,
                     id,
                     img,
                     buttonType,
                     clickHandler,
                     styles,
                 }) => {
    return (
        <div className={styles.filmContainer}>
            <div className={styles.filmImg}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.filmButton} onClick={clickHandler}>
                <div className={styles.buttonContent}>
                    {buttonType}
                </div>
            </div>
        </div>
    );
};

film.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    clickHandler: PropTypes.func,
    styles: PropTypes.object,
    buttonType: PropTypes.string,
};

film.defaultProps = {
    styles: FilmStyle,
    id: 0,
    title: '',
    img: '',
    buttonType: '',
    clickHandler: () => {},
};

export default film;