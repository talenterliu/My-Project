import React from 'react';
import FilmStyle from './index.module.scss';
import PropTypes from 'prop-types';

const MyLists = ({
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

MyLists.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    clickHandler: PropTypes.func,
    styles: PropTypes.object,
    buttonType: PropTypes.string,
};

MyLists.defaultProps = {
    styles: FilmStyle,
    id: 0,
    title: '',
    img: '',
    buttonType: '',
    clickHandler: () => {},
};

export default MyLists;