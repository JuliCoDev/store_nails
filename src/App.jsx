import './App.css';
import MainRoutes from './routes/MainRoutes';
import LoginProvider from './context/LoginContext';
function App() {
  return (
    <LoginProvider>
      <MainRoutes/>
    </LoginProvider>
  );
}

export default App;
