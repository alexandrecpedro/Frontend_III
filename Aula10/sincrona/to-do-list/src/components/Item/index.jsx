// import Button from "../Button";

export default function Item(props) {
    return (
        <div>
            <input type="checkbox" defaultChecked={props.status} />
            <span>{props.name}</span>
            {/* {
                !props.status ? (
                <Button onClick={() => props.deleteTask(props.id)}>Clear</Button> 
                ) : undefined
            } */}
            
            {/* Short Circuit Conditionals */}
            {!props.status && (
                <button onClick={() => props.deleteTask(props.id)}>Clear</button> 
            )}
        </div>
    );
}