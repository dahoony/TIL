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
const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU';
const keyword = 'cats';
const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

// Ajax request 
const GiphyAjaxCall = new XMLHttpRequest();
GiphyAjaxCall.open("GET",URL);
GiphyAjaxCall.send();

GiphyAjaxCall.addEventListener('load', (event) => {
    const rawData = event.target.response;
    const parsedData = JSON.parse(rawData);
    pushToDOM(parsedData);
});

// 3. GIF 파일들을 index.html에 넣는다.
const pushToDOM = (parsedData)=>{
    //console.log(parsedData.data[0].images.fixed_height.url);
    const result_area = document.querySelector('#result-area');
    
    result_area.innerHTML = `<img src="${parsedData.data[0].images.fixed_height.url}" alt='cat'>`;
};