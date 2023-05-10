import React,{useState, useEffect} from 'react'

export default function List({getList}) {
    const [list, setList] = useState([])

    useEffect(()=>{
        console.log("updated list items")
        setList(getList())
    },[getList])

    return (
        <div>
            {list.map(item=>{
                    return (
                        <p key={item}>{item}</p>
                    )
            })}
        </div>
    )
}
