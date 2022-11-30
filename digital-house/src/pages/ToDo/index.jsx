import { useEffect, useState } from 'react'
import { apiUrl } from '../../api'
import { contents } from "../../assets/translate/contents"
import { Task } from '../../components/Task'
import { useLanguage } from '../../hooks/useLanguage'
import './style.scss'

export function ToDo() {
    /** REACT HOOKS **/
    // (1) useState
    const [authToken, setAuthToken] = useState('')
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [taskNameError, setTaskNameError] = useState(false)

    // (2) useLanguage
    const { currentLanguage } = useLanguage()

    // (3) useEffect
    // useEffect de Auth
    useEffect(() => {
        const userData = {
            email: 'usertesteaulateste@mail.com',
            password: '1234'
        }

        const requestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        const requestConfig = {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify(userData)
        }

        fetch(`${apiUrl}/users/login`, requestConfig).then(
            response => {
                if(response.ok) {
                    response.json().then(
                        data => {
                            setAuthToken(data.jwt)
                        }
                    )
                } else {
                    alert('wrong password')
                }
            }
        )
    }, [])

    // useEffect de Get de Tasks
    useEffect(() => {
        if(authToken !== '') {

            const requestHeaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authToken
            }

            const requestConfig = {
                headers: requestHeaders
            }

            fetch(`${apiUrl}/tasks`, requestConfig).then(
                response => {
                    response.json().then(
                        data => setTasks(data)
                    )
                }
            )
        }
    }, [authToken])

    // useEffect para validar o Formulário
    useEffect(() => {
        if(taskName.length > 4) {
            setTaskNameError(false)
        } else {
            setTaskNameError(true)
        }
    }, [taskName])

    function createTask(event) {
        event.preventDefault()

        const requestHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': authToken
        }

        const requestBody = JSON.stringify({
            description: taskName,
            completed: false
        })

        const requestConfig = {
            method: 'POST',
            headers: requestHeaders,
            body: requestBody
        }

        fetch(`${apiUrl}/tasks`, requestConfig).then(
            response => {
                response.json().then(
                    data => {
                        setTasks([...tasks, data])
                    }
                )
            }
        )
    }

    /** FUNCTIONS **/
    function deleteTaskFromList(id) {
        setTasks(tasks.filter(task => {
            if (task.id !== id) return task
        }))
    }

    function updateTaskFromList(updatedTask) {
        setTasks(tasks.map(task => {
            if (task.id === updatedTask.id) {
                return updatedTask
            }
            return task
        }))
    }

    return (
        <div className='to-do-component'>
            <form className={taskNameError ? 'form-error' : ''} onSubmit={event => createTask(event)}>
                <h1>{contents.toDoComponent.form.title[currentLanguage]}</h1>
                <div className='form-controller'>
                    <label htmlFor="">
                        {contents.toDoComponent.form.inputName.label[currentLanguage]}
                    </label>
                    <input
                        type="text"
                        value={taskName}
                        onChange={event => setTaskName(event.target.value)} />
                        <small>
                            {contents.toDoComponent.form.inputName.error[currentLanguage]}
                        </small>
                </div>
                <button disabled={taskNameError}>
                    {contents.toDoComponent.form.buttonName[currentLanguage]}
                </button>
            </form>

            <main>
                <h1>{contents.toDoComponent.main.title[currentLanguage]}</h1>
                <section className="items">
                    {
                        tasks.map(
                            task => (
                                <Task 
                                    key={task.id}>
                                    task={task}
                                    onDeleteTask={(id) => deleteTaskFromList(id)}
                                    onUpdateTask={(task) => updateTaskFromList(task)}
                                </Task>
                            )
                        )
                    }
                </section>
            </main>
        </div>
    )
}