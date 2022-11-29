import { useEffect, useState } from 'react';
import { apiUrl } from '../../api';
import './style.scss';

export function Task(props) {
    const [editMode, setEditMode] = useState(false);
    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        setTaskName(props.task.description)
    }, [])

    function deleteTask() {
        const requestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }

        const requestConfig = {
            method: 'DELETE',
            headers: requestHeaders
        }
        
        fetch(`${apiUrl}/tasks/${id}`, requestConfig).then(
            response => {
                if (response.ok) {
                    props.onDeleteTask(props.task.id)
                } else {
                    alert('Delete request has got wrong!')
                }
            }
        )
    }

    function updateTask(event) {
        event.preventDefault()

        const requestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken')
        }

        const requestBody = JSON.stringify({
            description: taskName
        })

        const requestConfig = {
            method: 'PUT',
            headers: requestHeaders,
            body: requestBody
        }

        fetch(`${apiUrl}/tasks/${props.task.id}`, requestConfig).then(
            response => {
                if (response.ok) {
                    setEditMode(false)
                    response.json().then(
                        data => {
                            props.onUpdateTask(data)
                        }
                    )
                } else {
                    alert('Edit request has got wrong!')
                }
            }
        )
    }

    return (
        <div className='task-component'>
            <h1>{props.task.description}</h1>
            <p>Status: {props.task.completed ? "Finished" : "Working"}</p>

            { editMode ? (
                <form action="" onSubmit={event => updateTask(event)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={taskName}
                            onChange={event => setTaskName(event.target.value)}
                        />
                    </div>
                    <button className='finish' onClick={updateTask}>Update</button>
                </form>
            ) :  null }
            <div className="buttons">
                <button className='edit' onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className='delete' onClick={deleteTask}>Delete</button>
                <button className='finish' onClick={finishTask}>Finish</button>
            </div>
        </div>
    );
}