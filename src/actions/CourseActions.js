import dispatcher from '../dispatcher';

export function addCourse(course){
  dispatcher.dispatch({
    type:"ADD_COURSE",
    course
  })
}

export function deleteCourse(id){
  dispatcher.dispatch({
    type:"DELETE_COURSE",
    id
  })
}
