function Button({ buttontext, setState, newState }) {
    return (
        <button onClick={() =>{setState(newState)}}>
            {buttontext}
        </button>
    );
}

export default Button;