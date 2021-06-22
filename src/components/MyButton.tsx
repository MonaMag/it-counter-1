import React from 'react';
import '../App.css';
import s from './Button.module.css'

type ButtonType = {
    title: string
    changeValue: () => void
    disabledBtn?: boolean

}

function MyButton(props: ButtonType) {


    return (
        <div >
            <button
                className={props.disabledBtn ? s.disabled : s.btn}
                disabled={props.disabledBtn}
                onClick={props.changeValue}>{props.title}
            </button>
        </div>
    )
}

export default MyButton;