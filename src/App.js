import './App.css';
import List from './components/List/List';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './layouts/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import Todo from './components/Todo/Todo';
import Field from './components/Field/Field';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage/>}>
            <Route index path='/' element={<List/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/field' element={<Field/>}/>
            <Route path='/*' element={<NotFound props = {{timeToMain:10}}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
