import './style.scss'

export function SeventhClassCardProduct({ picture, name, price }) {
    return (
        <div className="seventh-class-card-product-component">
            <img src={picture} />
            <div className="card-body">
                <h1>{name}</h1>
                <span>R$ {price},00</span>
            </div>
        </div>
    )
}