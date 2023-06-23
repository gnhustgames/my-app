
import './App.css';
import StoryComponent from './StoryFb/StoryComponent';
import UserManage from './CRUD API/userManage';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


function App() {
    return ( 
        <>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/CRUD'  Component={UserManage} />
            <Route path='/Story' Component={StoryComponent} />
        </Routes>
 
        </>
    );
}

export default App;