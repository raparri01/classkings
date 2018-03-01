import React, { Component } from 'react';
import './styles/css/MyCoursesComponent.css';
import CoursesStore from './stores/CoursesStore';

class MyCoursesComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      courses:[]
    }
  }

  componentWillMount(){
    CoursesStore.on("change", () =>{
        this.setState({
          courses: CoursesStore.getCourses()
        });
    });
  }

  render(){
    return(
      <div className = "myCourseList">
        <div className = "head"><h1>My Courses</h1></div>
        <div className = "myCourses">
          { this.state.courses.map( item =>
            <div className = "cardExterior">
              <div className=" myCardInterior" onClick = {() => CoursesStore.deleteCourse(item.course.objectID)}>
                <div className = "cardTitle">
                  {item.course.CourseName}
                </div>
                <div className = "cardLeft">
                  {item.course.Dept} {item.course.CourseNum}: {item.course.Section}
                  <br></br>
                  {item.course.Professor}
                  <br></br>
                  CRN:{item.course.objectID}
                </div>
                <div className = "cardRight">
                    {item.course.Day1} {item.course.Time1}<br></br>
                  {item.course.Day2} {item.course.Time2}<br></br>
                {item.course.Day3} {item.course.Time3}<br></br>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MyCoursesComponent
