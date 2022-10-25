import './style.scss'
import { componentsFinded } from './database'

export function FourthClass() {
    return (
		<div className='fourth-class-component'>
        	<h1 className='main-title'>Identified components</h1>

			<ul className='components-finded'>
				{componentsFinded.map((component) => (
					<li key={component.id}>
						<img src={component.image} alt={component.imageAlt} />
						<h1>{component.title}</h1>
						<p>{component.description}</p>
					</li>
				))}
			</ul>
		</div>
    )
}