import {ProductCardComponent} from './components/product-card.component';
import styles from './products.page.module.css';

export const Products = (
    {
        products
    }: {
        products: {
            name: string,
            description: string,
            image: string,
            price: number
        }[]
    }
) => {
    return (
        <div className={styles.grid}>
            {
                products.map((product, index) =>
                    <ProductCardComponent product={product} key={index} />
                )
            }
        </div>
    )
}
