import React, { useEffect, useState } from 'react';
import "./toast.css"

function Toast({ text, onClose }) {
    // const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 3000);
    }, [])

    return (
        <div className="toast-container">
            {text}
        </div>
    )
}

export default Toast;