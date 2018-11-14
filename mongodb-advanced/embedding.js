const mongoose = require('mongoose');

/** Connect */
mongoose.connect('mongodb://localhost/relation', { useNewUrlParser: true })
    .then(() => console.log('Connected MongoDB'))
    .catch(error => console.error(error.message));

/** Modeling */

const authorSchema = new mongoose.Schema({
    name: String,
    github: String
});

const courseSchema = new mongoose.Schema({
    name: String,
    author:[authorSchema]
});

const Author = mongoose.model('Author', authorSchema);
const Course = mongoose.model('Course', courseSchema);

/** CREATE */
async function createCourse(name,author){
    const course = new Course({name,author});
    try{
        const result = await course.save();
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}

async function listCourses(){
    const courses = await Course.find();
    console.log(courses);
}

// createCourse('Hyper',new Author({name:'John'}));

// listCourses();