
import { useEffect } from 'react';
import { GlobalStyle } from './styles/Global/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/Router';
import { Provider} from 'react-redux'; // Correct import statements
import { store } from './Redux/store';
import Header from './Components/common/Header/Header'; // Import Header component
import { initializeApp } from './Redux/Thunks/employeeThunk'; // Import initializeApp function


function App() {
  useEffect(() => {
    initializeApp(store.dispatch); // Call initializeApp function here
  }, []); // Call only once when the component mounts
  return (
    <Router>
    <Provider store={store}>
    <GlobalStyle />
    <Header/>
      <AppRoutes />
    
    </Provider>
  </Router>
  )
}

export default App


