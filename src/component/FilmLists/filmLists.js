import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film/film';
import ListsStyle from './filmLists.module.scss';

/**
 *   Set up the FilmLists stateless component. Recive the specific data from Netfilx.js component 
 */

const FilmLists = ({
    styles,
    list,
    title,
    buttonType,
    clickHandler,
    blankContent,
}) => {
    const filmList = list.map(
        (film) => (
            <Film {...film} key={film.id} buttonType={buttonType} clickHandler={() => clickHandler(film)} />
        ));
    return (
        <div className={styles.filmListContainer}>
            <h3 className={styles.fimListTitle}>
                {title}
            </h3>
            <div className={styles.filmListContent}>
                {
                    list.length === 0 &&
                    <h3>{blankContent}</h3>
                }
                {filmList}
            </div>
        </div>
    );
};

FilmLists.propTypes = {
    styles: PropTypes.object,
    list: PropTypes.array,
    title: PropTypes.string,
    blankContent: PropTypes.string,
    buttonType: PropTypes.string,
    clickHandler: PropTypes.func,
};

FilmLists.defaultProps = {
    styles: ListsStyle,
    list: [],
    clickHandler: () => {},
    title: '',
    blankContent: '',
    buttonType: '',
};

export default FilmLists;