import {useState, useMemo, useCallback} from 'react'
import List from './List'
function App() {

  // const [windowSize, setWindoSize] = useState(window.innerWidth)
  // console.log("object")
  // const handleSize = () => {
  //   setWindoSize(window.innerWidth)
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', handleSize)
  //   return () => {
  //     window.removeEventListener('resize', handleSize)
  //   }
  // },[windowSize])


  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState(false)

  const doubleNumber = useMemo(()=>{
    return slowFun(number)
  },[number])

  const themeStyle = useMemo(()=> {
    console.log("object")
    return {
      backgroundColor: theme ? 'black' : 'white',
      color: theme ? 'white' : 'black'
    }
  },[theme])

  const getItems = useCallback(
    () => {
      return [number, number + 1, number + 2]
    },
    [number],
  )

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <br/>
      <br/>
      <button onClick={()=>setTheme(prevTheme => !prevTheme)}>Change Theme</button>
      <p style={themeStyle}>
        {doubleNumber}
      </p>
      <List getList={getItems}/>
    </div>
  );
}

export default App;


function slowFun(num){
  console.log("Calling show function")
  for(let i=1;i<=1000000000;i++){}
  return num * 2;
}