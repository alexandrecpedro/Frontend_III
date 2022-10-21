import './styles.css';

export default function Button(props) {
    return ( 
        <button className={props.text === 'Add' ? 'button' : 'button2'}>
            {props.text}
        </button>
    );
}