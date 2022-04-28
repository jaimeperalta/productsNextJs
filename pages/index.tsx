import {useEffect, useState} from 'react'
import {FooterComponent} from '../components/footer/footer.component'
import {HeadComponent} from '../components/head/head.component'
import {HeaderComponent} from '../components/header/header.component'
import {MessageEmptyComponent} from '../components/messageEmpty/message-empty.component'
import {SearchBarComponent} from '../components/searchBar/searchBar.component'
import {get} from '../core/http/http.impl'
import styles from '../styles/Home.module.css'
import Products from './products/products.page'

export default function Home() {

  useEffect(() => {
    searchProduct()
  }, []);

  const [productsList, setProducts] = useState([]);

  const searchProduct = async (prodcutName = '') => {
    if (prodcutName.length >= 3) {
      let productsSearch = await get(prodcutName);
      setProducts(productsSearch.data.products);
    }

    if (prodcutName.length == 0) {
      let productsSearch = await get();
      setProducts(productsSearch.data.products)
    }
  }

  return (
    <div className={styles.grid}>

      <HeadComponent siteTitle={'Products'} />

      <HeaderComponent />

      <div className={styles.container}>

        <main className={styles.main}>

          <SearchBarComponent getProduct={searchProduct} />

          {
            productsList.length === 0 ?
              <MessageEmptyComponent /> :
              <Products products={productsList} />
          }

        </main>

        <FooterComponent />

      </div>

    </div>
  )
}
