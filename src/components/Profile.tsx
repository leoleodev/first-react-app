
import Styles from '../styles/modules/Profile.module.css'

export function Profile(){
    return(
        <section className={Styles.ProfileContainer}>
            <img src="https://github.com/leoleodev.png" alt="Leonardo" />
            <div className={Styles.Data}>
                <strong>Leonardo Developer Front End</strong>
                
            </div>
            
        </section>
    );
}