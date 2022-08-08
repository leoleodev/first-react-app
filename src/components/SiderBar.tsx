
interface SiderBarProps{
    text: string;
    color: string;
    children: string;
}

export function SiderBar(props: SiderBarProps){
    return(
        <div style={{color: props.color}}>
            {props.children} {props.text}           
        </div>
    );
}