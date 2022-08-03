
import Styles from '../styles/modules/Profile.module.css'

export function Profile(){
    return(
        <section className={Styles.ProfileContainer}>
            <img src="https://github.com/leoleodev.png" alt="Leonardo" />
            <div className={Styles.Date}>
                <strong>Leonardo Developer Front End</strong>
                <h4><li>STAKE</li></h4>
                <p>Developer with React JS</p>
            </div>
            
        </section>
    );
}