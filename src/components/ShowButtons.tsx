
import { useState } from 'react';
import Styles from '../styles/modules/ShowButtons.module.css';

interface ButtonAtribute{
    color: string;
    children: string;
}

export function ShowButtons(props: ButtonAtribute ){

    const [counter, setCounter] = useState(0);

    function add(){
        setCounter(counter+1);
    }

    return(
        <button
        onClick={add}
        type="button"
        style={{ backgroundColor: props.color }}
        className={Styles.buttonTeste}>
            <strong> Teste </strong>
            {props.children} <strong>{counter}</strong>
        </button>        
    );
}
