/**
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//Uso de filter e includes

const commonCourses = student1Courses.filter((assigments) => student2Courses.includes(assigments));
console.log(commonCourses);

    document.getElementById("commonCourse").textContent = "Common courses: " + commonCourses;
    