import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Hi() {
    return <div>
        <div className="myClass">My Name Is Mobeen</div>
        <h1> Country Name</h1>
        <div className="myList">
            <ul>
                <li>Pkaistan</li>
                <li>Turkey</li>
                <li>England</li>
                <li>Japan</li>
                <li>Canada</li>
            </ul>
        </div>
        <div className="add">
            {2+3}
            
        </div>

 </div>
}

ReactDOM.render(<Hi /> , document.querySelector('#root'));

