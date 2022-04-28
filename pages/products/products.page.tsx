import {GetStaticProps} from 'next/types';
import ProductCardComponent from './components/product-card.component';
import styles from './products.page.module.css';

export default function Products(
    {
        products
    }: {
        products: Array<{
            name: string,
            description: string,
            image: string,
            price: number
        }>
    }
) {
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

export const getStaticProps: GetStaticProps = async ({params}) => {
    const products = []
    return {
        props: {
            products
        }
    }
}
