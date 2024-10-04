import React from 'react';
import Hello from '../components/Hello';

const PropsPage = () => {
    return (
        //prettier-ignore
        //함수니까 파라미터를 만들어서 넘길 수 있음
        <>
        <Hello name="홍길동" color="red" age="13">
        </Hello>
        <Hello name="홍길순" color="blue" age="20">
        </Hello>
        </>
    );
};

export default PropsPage;
