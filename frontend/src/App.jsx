// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Home from './pages/Home';
// import { useAuth } from './AuthContext';
// import CourseDetail from './pages/CourseDetail';

// function App() {
//   const { token } = useAuth();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />} />
//         <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
//         <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
//         <Route path="/courses/:id" element={token ? <CourseDetail /> : <Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { useAuth } from './AuthContext';
import CourseDetail from './pages/CourseDetail';
import Navbar from './components/Navbar';

import './App.css';

function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            token ? (
              <AuthLayout>
                <Dashboard />
              </AuthLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/courses/:id"
          element={
            token ? (
              <AuthLayout>
                <CourseDetail />
              </AuthLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
