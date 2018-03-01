import React, { Component } from 'react';
import './styles/css/App.css';
import './styles/css/CourseListComponent.css';
import './styles/css/responsive.css';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList
} from 'react-instantsearch/dom';
import MyCoursesComponent from './MyCoursesComponent';
import CoursesStore from './stores/CoursesStore';
import * as CourseActions from './actions/CourseActions';
import credentials from './Credentials';

const Hit = ({hit}) =>
<div className = "cardExterior">
  <div className="cardInterior" onClick ={() => CoursesStore.addCourse(hit)}>
    <div className = "cardTitle">
      {hit.CourseName}
    </div>
    <div className = "cardLeft">
      {hit.Dept} {hit.CourseNum}: {hit.Section}
      <br></br>
      {hit.Professor}
    </div>
    <div className = "cardRight">
        {hit.Day1} {hit.Time1}<br></br>
      {hit.Day2} {hit.Time2}<br></br>
    {hit.Day3} {hit.Time3}<br></br>
    </div>
  </div>
</div>

const Content = () =>
    <div className = "courseSearch">
      <h1>Course Search Results</h1>
      <div className = "courseList">
        <Hits hitComponent={Hit}/>
      </div>
    </div>

const Filters = () =>
  <div className="searchOptions">
    <div className="refineList">
      <h3>Course Name</h3>
        <RefinementList
          limitMax={20}
          attributeName="CourseName"
          showMore={false}
          />
    </div>
    <div className = "refineList">
      <h3>Department</h3>
      <RefinementList
        limitMax={20}
        attributeName="Dept"
        showMore={false}
        />
    </div>
    <div className="refineList">
      <h3>Professor</h3>
        <RefinementList
          limitMax={20}
          attributeName="Professor"
          showMore={false}
          />
    </div>
    <div className="refineList">
      <h3>Course Number</h3>
        <RefinementList
          limitMax={20}
          attributeName="CourseNum"
          showMore={false}
          />
    </div>
  </div>

class App extends Component {
  constructor(props){
    super(props)
    this.toggleFiltering = this.toggleFiltering.bind(this);

    this.state = {
      filtering: false
    }
  }
  toggleFiltering() {
    this.setState({
      filtering: !this.state.filtering
    });
  }

  render() {
    var filters
    if(this.state.filtering === false){
      filters =
        <p onClick={this.toggleFiltering}>Show Filters (Made to make life easier)</p>
    }
    if(this.state.filtering === true){
      filters =
          <p onClick={this.toggleFiltering}>Hide Filters</p>
    }
    let visible = this.state.filtering ? "flex" : "none"

    return (
      <div className="App">
        <InstantSearch
          apiKey= {credentials.algoliaApiKey}
          appId= {credentials.algoliaAppId}
          indexName={credentials.indexName}>
        <div className = "siteHeader">
        <div className = "siteHeaderUpper">
          <div className="logoDiv">
              <img className="ckLogo" src={require('./img/ClasskingsLogo.png')} alt="cklogo"></img>
          </div>
          <div className="searchBars">
              <SearchBox translations={{placeholder:'Search for a Course Name, Department(4 Letters), Professor'}}/>
          </div>
          <div className="logoDiv"><img className = "mcLogo" src={require('./img/search-by-algolia.png')}></img>
          </div>
        </div>
        <div className = "siteHeaderLower">
          <div className='showFilters'>
            {filters}
            <div style={{display: visible}}>
              <Filters/>
            </div>
          </div>
      </div>
    </div>
        <div className="body">
          <Content />
          <MyCoursesComponent />
        </div>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
