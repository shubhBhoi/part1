import course from "../course"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"



const App = (props) => {

  const year = new Date().getFullYear() 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course. parts}/>
      <Total parts={course.parts} />
      <footer>© {year}</footer>
    </div>
  )
}

export default App