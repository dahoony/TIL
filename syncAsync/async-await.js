console.log('메인 코드 진행중..._');

/** await를 쓸려면 함수안에 써야하며, 함수앞에 async를 붙여줘야지 실행된다.... */
async function run(){
    try{
        const user = await getUser(1);
        const repos = await getRepos(user.gitHubID);
        const commits = await getCommits(repos[0]);
        
        console.log(commits);
    }catch(e){
        console.error(e.message);
    }
}

run();

console.log('메인 코드 더 진행중...');

/** functions define */
function getUser(id) {
    console.log('Reading Data form DB');
    const users = [
        { id: 1, gitHubID: 'neo' },
        { id: 2, gitHubID: 'john' }
    ];

    return new Promise((resolve,reject)=>{
        setTimeout(() => {//예약
            const user =  users.find(user=> user.id === id);
            if(user) resolve(user);
            else reject(new Error(`Can not find user with id:${id}`));
        }, 2000);
    });
}

function getRepos (userID){
    console.log(`Finding [ ${userID} ]'s all github repo...`);

    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(['TIL','ES6','Express-demo']);
        },1500);
    });
}

function getCommits (repo){
    console.log(`Getting all commits in [${repo}]`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['Init repo','Finish Something']);
        },2000)
    });
    
}