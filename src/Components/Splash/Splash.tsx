import React, { ReactElement } from 'react'

function Splash(): ReactElement {
  
  // const [count, setCount] = useState<number>(0)
  // --> import useEffect from React
  // useEffect(() => {
  //   fetchData().then(data=>console.log(data))
  // },[])
  // useEffect(() => {
  //   const r = isSunday(new Date())
  //   console.log(r)
  // }, [count])
  // const isSunday = (v: Date): boolean => {
  //   return v.getDay() === 0
  // }
 
// --> at click event handler
  const renderForm = () => {
    <div>
      <p>should display the form</p>
      <p>might Route with</p>
    </div>
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    renderForm()
  }

    return (
      <main>
        <h1 onClick={handleClick}>This is splash</h1>
        {/* <button onClick={handleClick}>FORM</button> */}
        {/* <Form /> */}
      </main>
  )
  }

    export default Splash