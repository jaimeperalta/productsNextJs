import styles from './header.component.module.css'
export const HeaderComponent = () => {

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                ImageMaker
            </h1>
            <nav className={styles.mainNav}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Cart</a>
                    </li>
                    <li>
                        <a href="#">Favorites</a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
