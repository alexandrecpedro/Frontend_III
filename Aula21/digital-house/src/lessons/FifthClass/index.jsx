import './style.scss'
import { componentsFinded } from './database'
import { FifthClassItem } from '../../components/FifthClassItem'

export function FifthClass() {
    return (
		<div className='fifth-class-component'>

        	<h1 className='main-title'>Identified components</h1>

			<ul className='components-finded'>
				{componentsFinded.map(({ id, image, imageAlt, title, description }) => (
					<FifthClassItem
						key={id}
						image={image}
						imageAlt={imageAlt}
						title={title}
						description={description}
					/>
				))}
			</ul>
		</div>
    )
}