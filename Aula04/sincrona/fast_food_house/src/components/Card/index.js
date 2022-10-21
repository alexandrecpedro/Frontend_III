import './styles.css';

export function Card({ item }) {
    return (
        <div className="card_home_item">
            {/* <img src={logo} alt='thumb' className='card_img' />
            <h3 className='item_card_title'>Título do Produto</h3>
            <p>descrição mais longa do produto</p> */}
            <img src={item.image} alt="thumb" className="card_img" />
            <h3 className="item_card_title">{item.title}</h3>
            <p className="item_card_description">{item.description}</p>
        </div>
    );
}