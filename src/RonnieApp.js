import { useState } from "react";
//state is data
//all of this username state is in this Form componet
const Form = () => {
    //variable of the state obj, second is the setterfunc,
    //anytime you call the setter function, it will cause react to rerender with updated data
    const [userObj, setUserObj] = useState({
        username: '',
        password: ''
    }); //() default state, when this page loads, it is an obj
    //userObj = { username: '', password: '' } = our default state

    //create a function
    const handleChange = (e) => {
        // destructur to make it easier
        // const name = e.target.name; //target is an object that has a buncha properties
        //const value = e.target.value;
        //destructure the things we need, const { name, value } = e.target
        const { name, value } = e.target;
        //setter func that will override the intial obj with the values from the input
        //this takes in a callback, where the previousForm is an argument that is the old state values
        setUserObj((previousForm) => (
            //spread the old values, 
            { ...previousForm, [name]: value }  //bracket notation for the [name] to set the key of our userObj to the input name
        ))
        //spreadthe values of the state ... username: 'ronnie', password: 'imgeettting the most uptotdate'
        //setUserObj({...userObj, [name]: value})
        console.log(userObj)
    }


    //func to handle the submit
    const submitFunc = (event) => {
        //the default action of the form is prevented, aka stop the refresh
        event.preventDefault();
        console.log(userObj, 'is submitted')
    };

    return (
        <div>
            <form onSubmit={submitFunc}>
                <div className="m-2">
                    <label>Username:</label>
                    <input name='username' onChange={handleChange} type="text" />
                </div>
                <div className="m-2">
                    <label>Password:</label>
                    <input name='password' onChange={handleChange} type="text" />
                </div>
                <button >Submit!</button>
            </form>
        </div>
    );
};

export default Form;