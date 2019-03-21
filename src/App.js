import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingGIFS } from './store/actions';

class App extends Component {
    componentDidMount() {
        this.props.getTrendingGIFS();
    }

    render() {
        return (
            <div className="App">
                {this.props.gifs.map(gif => (
                    <img
                        src={gif.images.original.url}
                        width="25%"
                        alt={gif.title}
                        key={gif.id}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gifs: state.gifs,
    };
};

export default connect(
    mapStateToProps,
    { getTrendingGIFS }
)(App);
