import './styles.css';

export default function Button(props) {
    return ( 
        <button 
            className={props.text === 'Add' ? 'button' : 'button2'} 
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}