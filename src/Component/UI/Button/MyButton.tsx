import React from 'react';
import styles from './MyButton.module.css'

interface IMyButton {
    children: string,
    disabled?: boolean,
    onClick?(e: React.MouseEvent<HTMLButtonElement>): void
}

export const MyButton:React.FC<IMyButton> = ({children,...props}) => {

    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    );
};