import React, { useState } from 'react';

const Input1 = () => {
    //let text = '';
    const [text, setText] = useState('');

    const onChange = (event) => {
        setText(event.target.value);
    };

    // prettier-ignore
    return (
        <div>
            이름<input onChange={onChange} value={text} /><br/>
            국어<input onChange={onChange} value={Number} className='kor'/><br/>
            수학<input onChange={onChange} value={Number} className='math'/><br/>
        영어<input onChange={onChange} value={Number} className='eng'/><br/>
            <div>
                {/* <b>총점:{(kor +math+eng)} </b>
                <b>평균:{(kor +math+eng)/3.0} </b> */}
            </div>
        </div>
    );
};

export default Input1;
