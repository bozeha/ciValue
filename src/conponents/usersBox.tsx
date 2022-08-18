
import styled from "styled-components"
import { useState, useEffect } from "react"
import { toDoListApi, usersApiUrl } from "../utils/consts"
import { ITodo, IUser } from '../utils/interfaces'
import { v4 as uuidv4 } from 'uuid'
import TodoObj from "./todoObj"

const UsersBox = () => {
    const [usersArray, setUsersArray] = useState<IUser[]>([])
    const [selectedUser, setSelectedUser] = useState<number>(-1)
    const initializeTodoObj: ITodo = {
        userId: -1, id: -1, title: "", completed: false
    }
    const [todoObj, setTodoObj] = useState<ITodo>(initializeTodoObj)

    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        if (selectedUser !== -1) {
            getToDo(selectedUser)
        }
    }, [selectedUser])
    useEffect(() => {
        if (usersArray && usersArray.length > 0) {
            setSelectedUser(usersArray[0].id)
        }

    }, [usersArray])
    const getUsers = async () => {
        const usersArr = await fetchData(usersApiUrl)
        setUsersArray(usersArr)
    }
    const getToDo = async (id: number) => {

        const toDoObj = await fetchData(`${toDoListApi}${id}`)
        setTodoObj(toDoObj)
    }

    const fetchData = async (url: string) => {
        try {
            const usersArr = await fetch(url).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            return usersArr
        } catch (e) {
            console.log(`Error :: ${e}`)
            return []
        }
    }

    return <StyledUsersBox>
        <h1>Users</h1>
        <select value={selectedUser} onChange={(e) => { setSelectedUser(parseInt(e.target.value)) }}>
            {usersArray && usersArray.map((current: IUser) => (
                <option key={uuidv4()} value={current.id} >{current.name}</option>
            ))}
        </select>
        <TodoObj {...todoObj} />
    </StyledUsersBox >
}

export default UsersBox



const StyledUsersBox = styled.div`
    color:blue;
    width:1000px;
    height:500px;
    background-color:rgba(0,0,0,0.1);
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
    h1{
        width:100%;
        text-align:center;
    }
    select{
        width:80%;
        margin:0 auto;
        text-align:center;
        font-size:30px;
        
    }
    
`