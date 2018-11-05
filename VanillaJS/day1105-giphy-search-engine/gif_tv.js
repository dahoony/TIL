const lists = ['baby','cat','dog','star','moon'];

const banner = document.querySelector('#banner');

setInterval(function(){
    let selectOne = lists[Math.floor(Math.random()*lists.length)];
    requestAPI2(selectOne);
},3000)


const requestAPI2 = (input) => {
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
        pushToBanner(parsedData);
    });
}

// 3. GIF 파일들을 index.html에 넣는다.
const pushToBanner = (parsedData)=>{
    const result_area = document.querySelector('#banner');
    const dataSet = parsedData.data;
    const pickRandom = Math.floor(Math.random()*dataSet.length);

    let imgURL = dataSet[pickRandom].images.fixed_height.url;
    result_area.innerHTML = `<img src="${imgURL}" alt='${dataSet[pickRandom].title}' class="img-center">`;

};