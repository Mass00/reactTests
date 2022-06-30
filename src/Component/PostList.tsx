import React from 'react';
import {PostItem} from "./PostItem";
import {postTypes} from "../App";

interface IPostList {
    posts: postTypes[],
    onClick(id: number): void,
    handlerOnChangeCheckbox(id: number): void,
    handlerOnClickChangeRaiting(id: number, value: number): void
}

export const PostList: React.FC<IPostList> = ({posts, onClick, handlerOnChangeCheckbox, handlerOnClickChangeRaiting}) => {
    return (
        <div>
            {posts.map(item => <PostItem
                key={item.id}
                post={item}
                onClick={() => onClick(item.id)}
                handlerOnChangeCheckbox={handlerOnChangeCheckbox}
                handlerOnClickChangeRaiting={handlerOnClickChangeRaiting}
            />)}
        </div>
    );
};

