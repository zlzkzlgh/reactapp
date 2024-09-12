import React,{useState} from "react"
import {ListItem,
        ListItemText,
        InputBase,
        Checkbox,
        ListItemSecondaryAction,
        IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined"
//useState
//리액트에서 사용되는 Hook중 하나로 함수형 컴포넌트에서 상태 변수를
//사용할 수 있도록 해준다.
//훅을 사용하면 리액트가 제공하는 기능과 상태변수를 사용할 수 있다.

//함수 생성 방법
/* 1. function 함수명(){

    }
   2. let 함수명 = function(){  -> let 함수명 = () => {}
  
    }

화살표 함수 규칙
1.매개변수가 1개면 소괄호 생략가능
2.명령이 한 줄이면서 return이 있다면, 중괄호와 return 같이 생략가능
*/ 

const Todo = (props) => {
    const [item, setItem] = useState(props.item);
    const deleteItem = props.deleteItem;
    
    //deleteEventHandler작성
    const deleteEventHandler = () => {
        //삭제하려고 하는 todo 전달
        deleteItem(item);
    }

    return(
    <ListItem>
        <Checkbox checked={item.done}/>
        <ListItemText>
            <InputBase 
            inputProps={{"aria-lable" : "naked"}}
            type = "text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
        />
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                <DeleteOutlined />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
    );
}
export default Todo;