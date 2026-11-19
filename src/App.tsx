import {Routes, Route} from "react-router-dom"
import TodoList from './components/Todo/TodoList'
import TodoCreate from './components/Todo/TodoCreate'
import Layout from "./components/ui/NavBar"
import TodoUpdate from "./components/Todo/TodoUpdate"
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<TodoList/>}/>
          <Route path="create" element={<TodoCreate/>}/>
          <Route path='/todo/:id/update' element={<TodoUpdate/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

