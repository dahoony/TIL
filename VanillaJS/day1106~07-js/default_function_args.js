/** ES5 */
function makeRequest(url,method){
    if(!method){
        method = 'GET';
    }
    doSomething(method,url);
}

makeRequest('https://dahoony.github.io');
makeRequest('https://dahoony.github.io','GET');
makeRequest('https://dahoony.github.io','POST');

/** ES6 */
function makeRequest2(url,method='GET'){
    dosomeThing(method,url);
}


/** 실습 */
function sum (a,b){
    if(a===undefined){
        a = 0;
    }

    if(b===undefined){
        b=0;
    }

    return a+b;
}

// =>
function sum(a=0,b=0){
    return a+b;
}

/** 실습 2 */
function addOffset(style){
    if(!style){
        style ={};
    }
    style.offset = '10px';
    return style;
}

//=>

function addOffset(style={}){
    style.offset = '10px';
    return style;
}
