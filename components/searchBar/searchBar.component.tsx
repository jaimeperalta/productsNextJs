import styles from './searchBar.component.module.css';

export const SearchBarComponent = ({
    getProduct
}) => {

    const handleChange = ({target}) => {
        const {value} = target
        getProduct(value);
    }

    return (
        <input className={styles.inputSearch}
            type={'search'}
            placeholder={'Buscar productos'}
            onChange={handleChange}></input>
    )
}
