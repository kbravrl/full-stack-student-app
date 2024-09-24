import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Student from './pages/Student'
import CreateStudent from './pages/CreateStudent'
import UpdateStudent from './pages/UpdateStudent'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Student/>} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path='/update/:id' element={<UpdateStudent />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App