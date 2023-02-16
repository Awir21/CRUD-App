import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Listing from './Listing';
import Create from './Create';
import Detail from './Detail';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <h1>React CRUD Demo</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Listing />}> </Route>
      <Route path='/crud-app/create' element={<Create />}></Route>
      <Route path='/crud-app/detail/:empid' element={<Detail />}></Route>
      <Route path='/crud-app/edit/:empid' element={<Edit />}></Route>

    </Routes>
  </BrowserRouter>
    </div>
  );
  
}

export default App;
