import React from 'react';
import {postTypes} from "../App";
import styles from './PostItem.module.css';
import {Star} from "./UI/Star/Star";

interface IPostItem {
    post: postTypes,
    onClick(id: number): void,
    handlerOnChangeCheckbox(id: number): void,
    handlerOnClickChangeRaiting(id: number, value: number): void
}

export const PostItem: React.FC<IPostItem> = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                <div>{props.post.desc}</div>
            </div>

            <div className="post__btn">
                <input type='checkbox' onChange={() => props.handlerOnChangeCheckbox(props.post.id)}
                       className={styles.input} checked={props.post.isDone}/>
                <button onClick={() => props.onClick(props.post.id)}>Удалить</button>
                <span className={styles.stars}>
                    {[...Array(5)].map((item, index) => {
                        return (
                            <Star selected={props.post.raiting > index}
                                  key={index}
                                  value={index}
                                  id={props.post.id}
                                  handlerOnClickChangeRaiting={props.handlerOnClickChangeRaiting}
                            />
                        )
                    })}

                </span>
            </div>

        </div>
    );
};
