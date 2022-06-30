import React, {useState} from 'react';

interface IStar {
    id: number,
    value: number,
    selected: boolean,
    handlerOnClickChangeRaiting(id: number, value: number): void

}

export const Star: React.FC<IStar> = ({selected,value,  id, handlerOnClickChangeRaiting}) => {

    return (
        <div onClick={() => handlerOnClickChangeRaiting(id, value + 1)}>
            {selected ? '\u2605' : '\u2606'}
        </div>
    );
};
