// 1. input 태그 안의 값을 잡는다
const button = document.querySelector('#search-btn');
const inputArea = document.querySelector('#search');
const result_area = document.querySelector('#result-area');

button.addEventListener('click',() => {
    requestAPI(inputArea.value);
});

inputArea.addEventListener('keypress',(event)=>{
    if(event.key === 'Enter'){
        requestAPI(inputArea.value);
    }
});

// 2. giphy라는 API를 활용하여 data를 받고 가공한다.
const requestAPI = (input) => {
    const API_KEY = 'pETal56SsBpImEECWh6AcSOUlSZfg7zU';
    const keyword = input;
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
}

// 3. GIF 파일들을 index.html에 넣는다.
const pushToDOM = (parsedData)=>{
    result_area.innerHTML = null;
    const dataSet = parsedData.data;
    const imageDataSet = dataSet.forEach((imageData) => {
        let imgURL = imageData.images.fixed_height.url;
        result_area.innerHTML += `<img src="${imgURL}" alt='${imageData.title}'>`;
        // result_area.appendChild();
    });
};