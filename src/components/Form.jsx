import { useState } from "react";

const Form = (props) =>{
    const [formState, setFormState] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getGf(formState)
        setFormState(null)
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Find a Gif!" />
        </form>
    </div>
    )
}

export default Form