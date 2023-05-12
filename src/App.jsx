import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, protectedRoutes } from './pages/index'
import { ProtectedRoute } from './components/ProtectedRoute';
import { Main } from './Layouts/index';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/*" element={<Navigate to="/" />} />
      {
        publicRoutes.map((data, index) => (
          <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={<Main Child={data.component} title={data.title}/>} key={index}/>
        ))
      }
      <Route element={<ProtectedRoute />}>
        {
          protectedRoutes.map((data, index) => (
            <Route onUpdate={() => window.scrollTo(0, 0)} exact={true} path={data.path} element={<Main Child={data.component} title={data.title}/>} key={publicRoutes.length + index}/>
          ))
        }
      </Route>
    </Routes>
  )
}

export default App
