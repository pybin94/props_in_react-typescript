import React, { useState } from "react";

const App = () => {

    const [modal, setModal] = useState<boolean>(false);
    return (
        <div className='chatting'>
            <div onClick={()=> {setModal(true)}}></div>
            {
                modal === true
                ? <Modal modal={modal} setModal={setModal} />
                : null
            }

        </div>
    );
}

interface Props {
    modal: boolean;
    setModal: any;
}

const Modal = (props: Props) => {

    let [inputValue, setInputValue] = useState<number>(0);

    const addNum = (value: number) => {
        setInputValue(inputValue = value)
    };
    return (
        <div style={{ 
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate( -50%, -50% )",
            width:"500px",
            height:"300px",
            background:"#fff",
            border:"1px solid #000"
        }}>
            <div>
                <button onClick={() => addNum(100)}>100</button>
                <button onClick={() => addNum(200)}>200</button>
                <button onClick={() => addNum(300)}>300</button>
            </div>
            <input onChange={(e) => { setInputValue(Number(e.target.value)) }} value={inputValue} type="number" />
            <button>확인</button>
            <button onClick={() => { props.setModal(false) }}>닫기</button>
        </div>
    );
};

export default App;