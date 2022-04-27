import styles from './footer.component.module.css';

export const FooterComponent = () => {

    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by <b>Jaime Peralta</b>
            </a>
        </footer>
    )
}
