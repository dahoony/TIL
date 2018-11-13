const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo',{useNewUrlParser: true})
    .then(result => {
        console.log(`Connected to MongoDB`);
    })
    .catch(error => {
        console.log(error.message);
    });


// 사용가능한 Schema DataType : String, Number, Date, Buffer, Boolean, ObjectID, Array([])
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type : Date, default: Date.now },
    isPublished:Boolean
})

const Course = mongoose.model('Course',courseSchema);

//table => Collection(RDBMS=>NoSQL)/ record => row

/** CRUD Operation */

/** Create */
const course = new Course({
    name: '실전 DApp 빌드',
    author:'john',
    tags:['Ethereum','EOS','Dapp'],
    isPublished:true
});

// course.save()
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));


