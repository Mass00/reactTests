import React, {useMemo, useState} from 'react';
import './App.css';
import {PostList} from "./Component/PostList";
import {MyButton} from "./Component/UI/Button/MyButton";
import {MyInput} from "./Component/UI/Input/MyInput";
import MySelect from "./Component/UI/Select/MySelect";

export type postTypes = {
    id: number,
    title: string,
    desc: string,
    isDone: boolean,
    raiting: number
}
type postValueTypes = {
    title: string,
    desc: string
}

function App() {
    const [inputPost, setInputPost] = useState<postValueTypes>({title: '', desc: ''})
    const [posts, setPost] = useState<postTypes[]>([
        {id: 1, title: 'JAVA SCRIPT', desc: 'Учите дети JS', isDone: true, raiting: 3},
        {id: 2, title: 'HTML&CSS', desc: 'Учите дети HTML&CSS', isDone: false, raiting: 0},
        {id: 3, title: 'React TS', desc: 'Учите дети React TS', isDone: false, raiting: 2}
    ])
    const [filter, setFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('')


    const handlerOnChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value)
    }
    const handlerOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPost(prev => ({...prev, title: e.target.value}))
    }
    const handlerOnChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPost(prev => ({...prev, desc: e.target.value}))
    }
    const handlerOnClickAddPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); //оставить sumbit
        if (inputPost.desc !== '' && inputPost.title !== '') {
            setPost(prev => [...prev, {...inputPost, isDone: false, raiting: 0 ,id: Date.now()}])
        }
        setInputPost(prev => ({...prev, title: '', desc: ''}))

    }
    const handlerOnPressAddPost = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputPost.desc !== '' && inputPost.title !== '') {
                setPost(prev => [...prev, {...inputPost, isDone: false,raiting: 0, id: Date.now()}])
            }
            setInputPost(prev => ({...prev, title: '', desc: ''}))
        }
    }
    const handlerOnChangeCheckbox = (id: number) => {
        setPost(prev => prev.map(item => {
            if(item.id === id) return {...item, isDone: !item.isDone}
            return item
        }))
    }
    const handlerOnClickChangeRaiting = (id: number, value: number) => {
        console.log(value)
        setPost(prev => prev.map(item => {
            if(item.id === id) return {...item, raiting: value}
            return item
        }))

    }
    const handlerOnChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const filtredPosts = useMemo(()=>{
        console.log('Отработала сортировка')
        if (filter === 'Active') return posts.filter(i => !i.isDone)
        if (filter === 'Completed') return posts.filter(i => i.isDone)
        return posts
    },[filter, posts])
    const filtredAndSearchPosts =  useMemo(() => {
        return filtredPosts.filter(item => item.title.toLowerCase().includes(searchQuery))
    },[searchQuery, filtredPosts])
    const removePost = (id: number) => {
        setPost(prev => prev.filter(item => item.id !== id))
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
                        onKeyDown={e => handlerOnPressAddPost(e)}
                    />
                    <MyInput
                        type="text"
                        placeholder='...'
                        value={inputPost.desc}
                        onChange={e => handlerOnChangeDesc(e)}
                        onKeyDown={e => handlerOnPressAddPost(e)}
                    />
                    <MyButton onClick={handlerOnClickAddPost}>Отправить</MyButton>
                </div>
                <MyInput type={'text'}
                         placeholder={'Поиск...'}
                         value={searchQuery}
                         onChange={e => handlerOnChangeSearchQuery(e)}
                />
                <MySelect
                    options={['All', 'Active', 'Completed']}
                    default={'Сортировка'}
                    onChange={handlerOnChangeFilter}

                />

            </form>
            {posts.length > 0 ?
                <PostList
                    posts={filtredAndSearchPosts}
                    onClick={removePost}
                    handlerOnChangeCheckbox={handlerOnChangeCheckbox}
                    handlerOnClickChangeRaiting={handlerOnClickChangeRaiting}
                />
                :
                <h1 style={{textAlign: "center"}}>Пусто!</h1>
            }

        </div>
    );
}

export default App;
