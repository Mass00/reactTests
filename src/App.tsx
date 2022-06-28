import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {PostList} from "./Component/PostList";
import {MyButton} from "./Component/UI/Button/MyButton";
import {MyInput} from "./Component/UI/Input/MyInput";
import MySelect from "./Component/UI/Select/MySelect";

export type postTypes = {
    id: number,
    title: string,
    desc: string,
    isDone: boolean
}
type postValueTypes = {
    title: string,
    desc: string,
    isDone: boolean
}
function App() {
    const [inputPost, setInputPost] = useState<postValueTypes>({title: '', desc: '', isDone: false})
    const [posts, setPost] = useState<postTypes[]>([
        {id: 1, title: 'JAVA SCRIPT', desc: 'Учите дети JS', isDone: true},
        {id: 2, title: 'HTML&CSS', desc: 'Учите дети HTML&CSS', isDone: false},
        {id: 3, title: 'React TS', desc: 'Учите дети React TS', isDone: false}
    ])
    const [filter, setFilter] = useState<string>('All');
    const handlerOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPost(prev => ({...prev, title: e.target.value, isDone: false}))
    }
    const handlerOnChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPost(prev => ({...prev, desc: e.target.value}))
    }
    const handlerOnClickAddPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); //оставить sumbit
        setPost(prev => [...prev,{...inputPost, id: Date.now()}])
        setInputPost(prev => ({...prev, title: '', desc: '', isDone: false}))

    }
    const filtredPosts = posts
    if( filter === 'Completed') filtredPosts.filter( i => i.isDone)
    if( filter === 'Completed') filtredPosts.filter( i => !i.isDone)
    const removePost = (id: number) => {
        setPost( prev => prev.filter(item => item.id !== id))
    }
    return (
        <div className="App">
            <form>
                <div className="input">
                    <MyInput
                        type="text"
                        placeholder='...'
                        value={inputPost.title}
                        onChange={e => handlerOnChangeTitle(e)}
                    />
                    <MyInput
                        type="text"
                        placeholder='...'
                        value={inputPost.desc}
                        onChange={e => handlerOnChangeDesc(e)}
                    />
                    <MyButton onClick={handlerOnClickAddPost}>Отправить</MyButton>
                </div>
                <MySelect
                    options={['All','Completed','Active']}
                    default={'Сортировка'}
                    onChange={setFilter}
                />
            </form>
            { posts.length > 0 ?
                <PostList posts={filtredPosts} onClick={removePost}/>
            :
                <h1 style={{textAlign: "center"}}>Пусто!</h1>
            }

        </div>
    );
}

export default App;
