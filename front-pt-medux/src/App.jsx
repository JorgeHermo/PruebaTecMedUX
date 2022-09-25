import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navigation />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
