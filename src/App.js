import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import {createContext, useState} from "react";
import ShowListOfStudent from "./Components/ShowListOfStudent";
import Search from "./Components/Search";
export const DataStudentContext = createContext(null)
function App() {
    const [student,setStudent] = useState([])
    const [search,setSearch] = useState('')
    const [theme,setTheme] = useState('light')
  return (
    <div className="App">
        <DataStudentContext.Provider value={{student,setStudent,search,setSearch,theme,setTheme}}>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
            <Route path={'/AddStudent'} element={<AddStudent/>}/>
            <Route path={'/ShowList'} element={<ShowListOfStudent/>}/>
            <Route path={'/Search'} element={<Search/>}/>
        </Routes>
      </Router>
        </DataStudentContext.Provider>
    </div>
  );
}

export default App;
