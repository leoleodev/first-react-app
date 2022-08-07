
import Styles from '../styles/modules/AboutMe.module.css'

export function AboutMe(){
    return(

        <div className={Styles.AboutMeContainer}>

            <h1 className={Styles.Title}>About me</h1>

            <section className={Styles.TextContainer}>
                <p>
                    Hello, my name is Leonardo Magalhães, I am a programming student,
                    more specifically front-end with a focus on React JS, but I 
                    have knowledge of how the web works and its technologies like 
                    HTML, CSS and programming languages ​​like JavaScript. I also have 
                    knowledge in styles framework, Bootstrap and I am currently 
                    studying reactjs as a javascript library along with NextJs.
                </p>
            </section>

            

        </div>

    );
}