import { useState } from "react";

export default function Password() {
    const [show, setShow] = useState(false);

    return (
        <>
            <input type={show ? 'text' : 'password'} />
            <button type='button' onClick={() => setShow(p => !p)}>Show</button>
        </>
    );
}