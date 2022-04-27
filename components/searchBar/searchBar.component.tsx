import {useState} from 'react';
import styles from './searchBar.component.module.css';

export const SearchBarComponent = ({
    getProduct
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        getProduct(inputValue);
        setInputValue('');
    }

    const handleInputChange = ({target}) => {
        const {value} = target
        setInputValue(value)
    }

    return (
        <form className={styles.formInput}
            onSubmit={handleChange}>
            <input className={styles.inputSearch}
                type='text'
                value={inputValue}
                placeholder={'Search Products'}
                onChange={handleInputChange}></input>
        </form>

    )
}
