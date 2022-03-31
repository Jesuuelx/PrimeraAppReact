import { Footer } from './Footer'
import { Main } from './Main'
import { NavBar } from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { MyContext } from './MyContext';
export const App = () => {
 

  return (
   
   <MyContext>
   <Router>
    <NavBar />
    <Main />
    <Footer />
    </Router>
    </MyContext>
  )

}
