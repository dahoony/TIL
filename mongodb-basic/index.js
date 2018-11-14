const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo',{useNewUrlParser: true})
    .then(result => {
        console.log(`Connected to MongoDB`);
    })
    .catch(error => {
        console.log(error.message);
    });


// 사용가능한 Schema DataType : String, Number, Date, Buffer, Boolean, ObjectID, Array([])
// String : minlenth, maxlenth, match, enum
// Number : min, max
// Date : min,max
// All : required
const courseSchema = new mongoose.Schema({
    name: { type : String, required:true },
    author: String,
    tags: {
        type : Array,
        // custom Validator
        validate: {
            validator: function(v){
                const result = v.every(tag => tag.length>0);
                return v && v.length >0 && result;
            },
            message: 'A Course should have at least 1 tag'
        }
    },
    date: { type : Date, default: Date.now },
    isPublished:Boolean
})

const Course = mongoose.model('Course',courseSchema);

//table => Collection(RDBMS=>NoSQL)/ record => row

/** CRUD Operation */

/** Create */
async function createCourse(){
    const course = new Course({
        name: '코딩 테스트 가즈아',
        author:'dahoon',
        tags:['Java','javascript','api'],
        isPublished:false
    });
    
    try{
        // const result = await course.validate();
        // console.log(result);
        const result = await course.save();
        console.log(result);
    }catch(error){
        console.error(error.message);
    }
}

// createCourse();

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

/** modify */  
/** 방법 1 */
async function updateCourse1(id){
    const course = await Course.findById(id);
    
    if(!course) return;
    
    //Change
    course.author = '다훈';
    course.tags = ['Java','coding'];
    
    const result = await course.save();

    console.log(result);

}
/** 방법 2 직접 Update => result */

async function updateCourse(id){
    const result = await Course.updateMany({isPublished:false},{
        $set:{
            author:'dada',
        }
    });

    // const result = await Course.findByIdAndUpdate(id,{
    //     $set:{
    //         author:'multicampus',
    //     }
    // });
    console.log(result);
}


// updateCourse('5bea638d1736e951e82d15c3');

/** Destory function */
async function removeCourse(id){
    const result = await Course.deleteOne({_id:id});
    console.log(result);
}

removeCourse('5beb7b3d40a4d05098282765');