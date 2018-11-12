// promise

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100);
    if (number % 2 === 1) {
        resolve({ id: 1, email: 'crysis1@naver.com' });
    } else {
        reject(`Error`);
    }
});

// then 은 성공시(resolve)
// catch 는 실패시(reject)
promise
    .then(user => console.log(user))
    .catch(error => console.log(error));


