
import Styles from '../styles/modules/ShowButtons.module.css';

interface ButtonAtribute{
    color: string;
    children: string;
}

export function ShowButtons(props: ButtonAtribute ){
    return(
        <button type="button" style={{ backgroundColor: props.color }} className={Styles.buttonTeste}>
            <strong> Teste</strong>
            {props.children}
        </button>        
    );
}