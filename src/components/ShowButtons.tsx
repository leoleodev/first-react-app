
import { useState } from 'react';
import Styles from '../styles/modules/ShowButtons.module.css';

interface ButtonAtribute{
    color?: string;
    children?: string;
}

export function ShowButtons(props: ButtonAtribute ){

    const [counter, setCounter] = useState(0);

    function add(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }

    return(

        <div className={Styles.divContainer}>
            <button
            onClick={decrement}
            type="button"
            style={{ backgroundColor: props.color }}
            className={Styles.buttonTeste}
            >
                <strong> -- </strong>
                {props.children}
            </button>

            <button            
            type="button"
            style={{ backgroundColor: props.color }}
            className={Styles.buttonTeste}
            >
                <strong>  </strong>
                 <strong>{counter}</strong>
            </button>

            <button
            onClick={add}
            type="button"
            style={{ backgroundColor: props.color }}
            className={Styles.buttonTeste}
            >
                <strong> ++ </strong>
                {props.children}
            </button>
        </div>

                
    );
}
