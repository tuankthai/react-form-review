
import './App.css';
import {useState} from "react"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first name", firstName)
    formData.append("last name", lastName)
    formData.append("email", email)
    formData.append("password", password)
    const formObject = Object.fromEntries(formData);
    console.log(formObject)

    console.log( JSON.stringify(formObject) )

    
  }

  function handleChangeFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          first name:
          <input onChange={handleChangeFirstName} type="text" value={ firstName} />
        </label>
        <label>
          last name:
          <input onChange={handleChangeLastName} type="text" value={lastName} />
        </label>
        <label>
          email:
          <input onChange={handleChangeEmail} type="text" value={email} />
        </label>
        <label>
          password:
          <input onChange={handleChangePassword} type="text" value={password} />
        </label>
        <button type="submit">Submit</button>

      </form>
     
    </div>
  );
}

export default App;
