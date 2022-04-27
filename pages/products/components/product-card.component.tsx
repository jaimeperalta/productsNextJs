import styles from './product-card.component.module.css';

export const ProductCardComponent = (
    {
        product
    }: {
        product: {
            name: string,
            description: string,
            image: string,
            price: number
        }
    }
) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.imgProduct} src={product.image} alt="name" />
            </div>
            <div className={styles.productInfo}>
                <div >
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div className={styles.priceContainer}>
                    <div>
                        <p><span className={styles.price}>{product.price}</span>$</p>
                    </div>
                    <div className={styles.buttonBuy}>
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
