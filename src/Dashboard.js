import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const dogSex = this.props.dogs.sex;
    const dogAge = this.props.dogs.age;
    const dogBreed = this.props.dogs.breed;
    const dogStory = this.props.dogs.story;

    const catName = this.props.cats.name;
    const catImage = this.props.cats.imageURL;
    const catSex = this.props.cats.sex;
    const catAge = this.props.cats.age;
    const catBreed = this.props.cats.breed;
    const catStory = this.props.cats.story;

    return (
      <div className="main">


      <div className="cats">
        <h1>{catName}</h1>
        <div>
          <img className="fluffyCatImg" src={catImage} alt="fluffyCat"/>
        </div>
        <h2>More About Fluffy</h2>
          <dl>
            <dt>Sex</dt>
            <dd>{catSex}</dd>
            <dt>Age</dt>
            <dd className="age">{catAge}</dd>
            <dt>Breed</dt>
            <dd>{catBreed}</dd>
            <dt>Story</dt>
            <dd>{catStory}</dd>
          </dl>
        <div>
          <button type="submit">Adopt</button>
        </div>
      </div>

      <div className="dogs">
        <h1>{dogName}</h1>
        <div>
          <img className="zeusDogImg" src={dogImage} alt="zeusDog"/>
        </div>
        <h2>More About Zeus</h2>
        <dl>
          <dt>Sex</dt>
          <dd>{dogSex}</dd>
          <dt>Age</dt>
          <dd className="age">{dogAge}</dd>
          <dt>Breed</dt>
          <dd>{dogBreed}</dd>
          <dt>Story</dt>
          <dd>{dogStory}</dd>
        </dl>
      <div>
        <button type="submit">Adopt</button>
      </div>
    </div>

    </div>
    );

  }
}

const mapStateToProps = state => ({
    cats: state.cats,
    dogs: state.dogs,
    loading: state.loading,
    error: state.error,
  });

export default connect(mapStateToProps)(Dashboard);
