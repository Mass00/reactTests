import React from 'react';
import {postTypes} from "../App";
interface IPostItem {
    post: postTypes,
    onClick(id: number): void
}

export const PostItem:React.FC<IPostItem> = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                <div>{props.post.desc}</div>
            </div>

            <div className="post__btn">
                <button onClick={() => props.onClick(props.post.id)}>Удалить</button>
            </div>
        </div>
    );
};
