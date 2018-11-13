const p1 = new Promise((resolve, reject) => {
    console.log('Fetching from Bank1...');
    setTimeout(() => {
        const response = { bank: 1, delayed: false };
        // 돈을 빌릴 수 있다를 표현하기 위해 연체된 것이 없다면 true 표시
        resolve(response);
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    console.log('Fetching from Bank2...');
    setTimeout(() => {
        const response = { bank: 2, delayed: true };

        resolve(response);
    }, 1500);
});

const p3 = new Promise((resolve, reject) => {
    console.log('Fetching from Bank3...');
    setTimeout(() => {
        const response = { bank: 3, delayed: false };

        resolve(response);
    }, 2000);
});

/**  3개다 resolve 됬을 때 같이 옴 */
// Promise.all([p1,p2,p3])
//     .then(result => console.log(result));

/** 제일 먼저 실행되는 것만 값을 가져온다. */
Promise.race([p1,p2,p3])
    .then(result => console.log(result));