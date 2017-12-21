import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from './store';
import { fetchCat } from './actions/cats';
import { fetchDog } from './actions/dogs';
import './Dashboard.css';

export class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
  }

  render() {
    console.log(this.props);
    const dogName = this.props.dogs.name;
    const dogImage = this.props.dogs.imageURL;

    const catName = this.props.cats.name;
    const catImage = this.props.cats.imageURL;

    return (<div>
      <h1>Animal Shelter</h1>

      <div className="cats">
        <h2>Cats</h2>
        <h3>{catName}</h3>
        <div>
          <img src={catImage}/>
        </div>
      </div>

      <div className="dogs">
        <h2>Dogs</h2>
        <h3>{dogName}</h3>
        <div>
          <img src={dogImage}/>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({ cats: state.cats, dogs: state.dogs, loading: state.loading, error: state.error });

export default connect(mapStateToProps)(Dashboard);
