import React from 'react';

interface IMySelect {
    options: string[],
    default: string,
    onChange(e: React.ChangeEvent<HTMLSelectElement>): void
}

const MySelect: React.FC<IMySelect> = (props) => {
    return (
        <select onChange={(e) => props.onChange(e)}>
            <option value = '' disabled={true}>{props.default}</option>
            {props.options.map((item, index) => {
                return (
                    <option key={index} value={item}>{item}</option>
                );
            })}
        </select>
    );
};

export default MySelect;