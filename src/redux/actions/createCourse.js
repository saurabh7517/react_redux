import * as courseApi from '../../api/courseApi';
import * as actionTypes from './actionTypes';

export function createCourse(course){
    return{
        type:actionTypes.CREATE_COURSE_SUCCESS,
        course:course
    }
}

export function updateCourse(course){
    return{
        type:actionTypes.UPDATE_COURSE_SUCCESS,
        course:course
    }
}

export function saveCourse(course){
    return function(dispatch){
        return courseApi.saveCourse(course)
        .then((savedCourse) => {course.id === savedCourse.id ? dispatch(updateCourse(course)):dispatch(createCourse(course));

        }).catch(error => console.log(error));
    }
}
export function loadCoursesSuccess(courses){
    return {
        type:actionTypes.LOAD_COURSES_SUCCESS,
        courses:courses
    }
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getCourses()
        .then((courses) => {dispatch(loadCoursesSuccess(courses))},(error) => {console.log(error)})
        .catch((error) => {console.log(error)});
    }
}
