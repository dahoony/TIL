const mongoose = require('mongoose');

/** Connect */
mongoose.connect('mongodb://localhost/relation',{ useNewUrlParser: true })
    .then(()=> console.log('Connected MongoDB'))
    .catch(error => console.error(error.message));

/** Modeling */

const Author = mongoose.model('Author',new mongoose.Schema({
    name: {type: String, required:true, minlength:2},
    github: String    
}));


const Course = mongoose.model('Course',new mongoose.Schema({
    name:{
        type: String,
        minlength:3,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}));

/** CREATE */
async function createAuthor(name, github){
    const author = new Author({
        name,
        github
    });

    try{
        const result = await author.save();
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}

async function createCourse(name, author){
    const course = new Course({name,author});
    try{
        const result = await course.save();
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}

// createAuthor('최다훈','github.com');
// createCourse('React', '5beb8a8d7c36c15208f899f5');

/** Read */
async function listCourses(){
    const courses = await Course
        .find()
        .populate('author')
        .select('name');

    console.log(courses);
}

listCourses();