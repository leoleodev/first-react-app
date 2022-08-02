
import Styles from '../styles/modules/ShowButtons.module.css';

export function ShowButtons(){
    return(
        <button type="button" className={Styles.buttonTeste}>
            Button de
            <strong> Teste</strong>
        </button>        
    );
}