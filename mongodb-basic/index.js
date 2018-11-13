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
async function createCourse(){
    const course = new Course({
        name: '실전 DApp 빌드',
        author:'john',
        tags:['Ethereum','EOS','Dapp'],
        isPublished:false
    });
    
    try{
        const result = await course.save();
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}

/** Read All(get) */
async function getCourses(){
    try{
        const courses = await Course
            //.find({price:{$gt:15}})
            // .find({isPublished:true})
            // .limit(10)
            // .sort({name:-1})
            // .select({name:1,tags:1});
            /** 정규 표현식 활용 가능. */
            // .find({author:/^ne/}); ne로 시작하는 정규표현식
            // .find({author:/hn$/}); 
            // .find({author:/.*oh.*/}) oh로 들어가는 모든 값 가져오기
            /** 개수 */
            // .count()
        console.log(courses);
    }catch(error){
        console.error(error.message);
    }
}

/** 비교 쿼리 연산자
 * $eq : equal
 * $neq : not equal
 * $gt : greater than >
 * $gte : greater than or equal >=
 * $lt : less than <
 * $lte : less than or equal <=
 * $in 
 * $nin 
 */

 /** 논리 쿼리 연산자
  * .and
  * .or
  * ex)
  * 다 가져와서  author이 'neo'이거나 isPublished가 false 인것.
  * Course
  *     .find()
  *     .or([{author:'neo'},{isPublished:false}])
  * 
  */

getCourses();





