import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCat, fetchDog } from './actions/pets';
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
          <img src={catImage} alt="fluffyCat"/>
        </div>
        <div>
          <button type="submit">Adopt</button>
        </div>
      </div>

      <div className="dogs">
        <h2>Dogs</h2>
        <h3>{dogName}</h3>
        <div>
          <img src={dogImage} alt="zeusDog"/>
        </div>
      </div>
      <div>
        <button type="submit">Adopt</button>
      </div>

    </div>);
  }
}

const mapStateToProps = state => ({
    cats: state.cats,
    dogs: state.dogs,
    loading: state.loading,
    error: state.error,
  });

export default connect(mapStateToProps)(Dashboard);
