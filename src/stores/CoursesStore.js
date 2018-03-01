import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class CoursesStore extends EventEmitter {
  constructor(){
    super()
    this.courses = []
  }

  getCourses(){
    return this.courses;
  }
  addCourse(course){
    const id = Date.now();
    this.courses.push({
      course
    })
    this.emit("change");
    console.log(this.courses);
  }
  deleteCourse(objectID){
    const id = Date.now();

    const result = this.courses.filter(course => course.course.objectID !== objectID);
    this.courses = result;
    this.emit("change");
  }

  handleActions(action){
    switch(action.type){
      case "ADD_COURSE":{
        this.addCourse(action.course)
      }
      case "DELETE_COURSE":{
      }
    }

  }
}
const coursesStore = new CoursesStore;
dispatcher.register(coursesStore.handleActions.bind(coursesStore));
export default coursesStore;
