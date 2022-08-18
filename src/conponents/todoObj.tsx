import styled from "styled-components"
import { ITodo } from "../utils/interfaces"




const TodoObj = ({ userId, id, title, completed }: ITodo) => {
    return <StyledTodo>
        <div>
            <h5>Id:</h5>
            <p>{id}</p>
        </div>
        <div>
            <h5>Title:</h5>
            <p>{title}</p>
        </div>
        <div>
            <h5>Complited:</h5>
            <p>{completed ? "true" : "false"}</p>
        </div>


    </StyledTodo>
}

export default TodoObj

const StyledTodo = styled.div`
    
    div{
        display:block;
        flex-direction:row;
        justify-content:center;
        align-items:bottom;
        width:100%;
        padding-left:10%;
         >*{
                 display:inline-block;
                 padding-top:15px;
                 margin:0px;
                 font-size:20px;
                 border-bottom:1px solid black;    
        }
    }


`