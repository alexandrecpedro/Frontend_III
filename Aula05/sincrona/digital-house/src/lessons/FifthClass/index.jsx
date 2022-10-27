import './style.scss'
import { componentsFinded, posts } from './database'
import { FifthClassItem } from '../../components/FifthClassItem'

export function FifthClass() {
    return (
		<main className='instagram-time-line-component'>

            <h1 className='main-title'>Instagram feed</h1>

			{posts.map((post) => (
				<div className='post'>
					
				</div>
			))}
		</main>
    )
}