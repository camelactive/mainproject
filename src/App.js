import './App.css';
import Start from './components/Start/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './layouts/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import Todo from './components/Todo/Todo';
import Field from './components/Field/Field';
import TodosLable from './layouts/TodosLable/TodosLable';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="text-center box-content text-4xl m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage/>}>
            <Route index path='/' element={<Start/>}/>
            <Route path='/todo' element={<TodosLable/>} >
              <Route path='/todo/newtodo' element={<Todo/>}/>
              <Route path='/todo/todoList' element={<TodoList/>}/>
            </Route>
            <Route path='/field' element={<Field/>}/>
            <Route path='/*' element={<NotFound props = {{timeToMain:4}}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
