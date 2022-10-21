import './style.scss'
import { components } from './database'

export function ThirdClass() {
    return (
        <main>
            <h1>Chosen project: YouTube</h1>
            <h2>List of components found in a system</h2>
            <ul>
                {components.map((component) => (
                    <li key={component.id}>
                        <img src={component.image} alt="" />
                        <h2>{component.name}</h2>
                        <p>{component.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}