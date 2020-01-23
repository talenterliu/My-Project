import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as filmActions from '../../actions/film.action';
import FilmLists from '../../component/FilmLists/filmLists';
import Logo from '../../component/Logo/logo';
import NetFlixStyle from './netflix.module.scss';

/**
 *  Set up the Netflix stateful component and bound it with Redux store. Use componentDidMount lifecycle
    hook method to fetch data from serve side. And Use the "connect" HOC to bound this component with redux
    store for get data. Create the "remove" and "add" handler for dispatch the relevant actions.
 */

class NetFlix extends Component {

    componentDidMount() {
        this.props.filmActions.fetchFilmData();
    }
    
    render() {
        const { myList, recommendations, styles } = this.props;
        if ( myList.length === 0 && recommendations.length ===0) {
            return <div />;
        }
        return (
            <div className={styles.netflixContainer}>
                <div className={styles.netflixContent}>
                    <div>
                        <Logo />
                    </div>
                    <FilmLists
                        list={myList}
                        clickHandler={this.props.filmActions.removeFilm}
                        title='My List'
                        buttonType='Remove'
                        blankContent='Nothing in your list'
                    />
                    <FilmLists
                        list={recommendations}
                        clickHandler={this.props.filmActions.addFilm}
                        title='Recommendation List'
                        buttonType='Add'
                        blankContent='All in your list'
                    />
                </div>
            </div>
        );
    }
    
}

NetFlix.propTypes = {
    myList: PropTypes.array,
    recommendations: PropTypes.array,
    filmActions: PropTypes.object,
    styles: PropTypes.object,
};

NetFlix.defaultProps = {
    myList: [],
    recommendations: [],
    filmActions: {},
    styles: NetFlixStyle,
};

const mapStateToProps = (state) => {
    const {
        films: {
            myList,
            recommendations,
        }
    } = state;

    return {
        myList,
        recommendations,
    };
};

const mapDispatchToProps = dispatch => ({
    filmActions: bindActionCreators(filmActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetFlix);
