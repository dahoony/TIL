/** 1. React와 ReactDOM 라이브러리 import 
 * 다이나믹 로딩이 가능하다.
*/
import React from 'react';
import ReactDOM from 'react-dom';


/** 2. React 컴포넌트를 생성 
 *  html 생성, event handling
*/
// function getButtonText(){
//     return 'ClickMe!';
// };

const App = () => {
    const buttonText = {happy:'hacking'}
    const time = new Date().toLocaleTimeString();new Date()
    return (
        <div>
            <h3>{time}</h3>
            <label htmlFor="name" className="name_label">Enter name: </label>
            <input type="text" id="name" />
            <button style={{backgroundColor:'blue',color:'white',border:`solid 1px black`}}>
                {buttonText.happy}
            </button>
        </div>
    );
}

/** 3. 화면에 HTML 띄우기 */
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)