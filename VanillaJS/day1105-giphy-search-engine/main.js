// 1. input 태그 안의 값을 잡는다
const button = document.querySelector('#search-btn');
const inputArea = document.querySelector('#search');
button.addEventListener('click',() => {
    const inputValue = document.querySelector('#search').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        const inputValue = document.querySelector('#search').value;
        pushToDOM(inputValue);
    }
});

// 2. giphy라는 API를 활용하여 data를 받고 가공한다.

// 3. GIF 파일들을 index.html에 넣는다.
const pushToDOM = (data)=>{
    const result_area = document.querySelector('#result-area');

    result_area.innerHTML = data;
};