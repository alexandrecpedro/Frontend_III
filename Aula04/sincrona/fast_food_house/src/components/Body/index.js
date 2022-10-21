import './styles.css';
import { Card } from '../Card';
import { food } from '../../data';

export default function Body() {
  return (
    <>
      <h1 className="h1_home">Fast-Food House</h1>
      <div className='container_cards_home'>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        {
          food.map((item) => (
            <Card key={item.id} comida={item} />
          ))
        }
      </div>
    </>
  );
}