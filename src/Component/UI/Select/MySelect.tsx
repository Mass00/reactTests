import React from 'react';

interface IMySelect {
    options: string[],
    default: string,
    onChange(value: string): void
}

const MySelect: React.FC<IMySelect> = (props) => {
    return (
        <select onChange={(e) => props.onChange(e.target.value)}>
            <option disabled={true}>{props.default}</option>
            {props.options.map(item => {
                return (
                    <option>{item}</option>
                );
            })}
        </select>
    );
};

export default MySelect;