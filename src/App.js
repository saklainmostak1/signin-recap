import './App.css';
import { getAuth } from 'firebase/auth'
import app from './firebase/firebase.init';
import RegisterReactBoots from './components/RegisterReactBoots/RegisterReactBoots';

const auth = getAuth(app)
function App() {

  const handleRegister = (event) =>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email, password)
  }
  const handleEmailBlur = (event) =>{
    console.log(event.target.value)
  }
  const handlePasswordBlur = (event) =>{
    console.log(event.target.value)
  }

  return (
    <div className="">

      <RegisterReactBoots></RegisterReactBoots>

    
    </div>
  );
}

export default App;
