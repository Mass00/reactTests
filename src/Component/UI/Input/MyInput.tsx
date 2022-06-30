import React from 'react';
import styles from './MyInput.module.css'

interface IMyInput {
    type: 'text',
    placeholder: string,
    value?: string
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void,
    onKeyDown?(e: React.KeyboardEvent<HTMLInputElement>): void
}


// export const MyInput = React.forwardRef((props:IMyInput, ref:ForwardedRef<HTMLInputElement>) => {
//     return(
//         <input ref={ref} {...props} className={styles.myInput}/>
//     )});

export const MyInput = (props:IMyInput) => {
    return(
        <input {...props} className={styles.myInput}/>
    );
}