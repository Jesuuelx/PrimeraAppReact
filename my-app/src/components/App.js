import { Footer } from './Footer'
import { Main } from './Main'
import { NavBar } from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
export const App = () => {
 

  return (
    <Router>
    <NavBar />
    <Main />
    <Footer />
    </Router>
  )

}
