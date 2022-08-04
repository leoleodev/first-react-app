
import Styles from '../styles/modules/AboutMe.module.css'

export function AboutMe(){
    return(

        <div className={Styles.AboutMeContainer}>

            <h1 className={Styles.Title}>About me</h1>

            <section className={Styles.TextContainer}>
                <p>
                    Hello my name is Leonardo Magalhães, i´m student programing, most
                    especifically front-end with focus in the React JS, but have knowledges
                    in operation of web and yours technologeis such as HTML, CSS and linguages
                    of programing as JavaScript.
                    I have also knowledges in framework of styles, Bootstrap and currently
                    i´m studing reactjs as library of javascript together as NextJs.
                </p>
            </section>

            

        </div>

    );
}