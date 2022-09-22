/* eslint-disable react/react-in-jsx-scope */
import Home from './pages/home';
import Login from './pages/Login';


import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { UserProvider } from './context/User';
import CreateItem from './pages/CreateItem';

export function Router(){
    return(
        <BrowserRouter>
        <UserProvider>
            <Routes>
                    <Route 
                        path={'/login'} 
                        element={<Login />}
                    />
                    <Route 
                        path={'/home'} 
                        element={<Home />} 
                    />
                    <Route 
                        path={'/create'}
                        element={<CreateItem />}
                    />
                   
            </Routes>
        </UserProvider>
        </BrowserRouter>
    )
}