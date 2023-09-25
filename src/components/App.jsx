import course from "../course"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"



const App = (props) => {


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course. parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App