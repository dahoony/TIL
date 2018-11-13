const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise-basic', { useNewUrlParser: true })
    .then(result => console.log(`Connected to MongoDB`))
    .catch(error => console.log(error.message));

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseSchema);

async function getExercise1() {
    const courses = await Course
        .find()
        .and([{ isPublished: true }, { tags: { $in: 'backend' } }])
        .sort({name:1})
        .select({name:1,author:1});
    console.log(courses);
}

async function getExercise2(){
    const courses = await Course
        .find({ isPublished: true })
        .or([{ tags: 'backend' },{ tags: 'frontend'  }])
        .sort('-price')
        .select('name price');
    
    console.log(courses);
}

async function getExercise3(){
    const courses = await Course
        .find()
        .or([{price: {$gte: 15}},{name: /.*js*./i}])
    
    console.log(courses);
}

getExercise3();