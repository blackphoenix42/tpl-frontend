import React, { useEffect, useRef, useCallback } from 'react'
// import isNil from "lodash/fp/isNil"
import './Modal.css'

const Modal = ({ onCloseRequest, children }) => {
    const modal = useRef(null);

    const handleKeyUp = useCallback(
        e => {
            const keys = {
                27: () => {
                    e.preventDefault();
                    onCloseRequest();
                    window.removeEventListener("keyup", handleKeyUp, false);
                }
            };

            if (keys[e.keyCode]) {
                keys[e.keyCode]();
            }
        },
        [onCloseRequest]
    );

    // const handleOutsideClick = useCallback(
    //     e => {
    //         if (!isNil(modal)) {
    //             onCloseRequest();
    //             document.removeEventListener("click", handleOutsideClick, false);
    //         }
    //     },
    //     [onCloseRequest]
    // );

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp, false);
        // document.addEventListener("click", handleOutsideClick, false);

        return () => {
            window.removeEventListener("keyup", handleKeyUp, false);
            // document.removeEventListener("click", handleOutsideClick, false);
        };
        // }, [handleKeyUp, handleOutsideClick]);
    }, [handleKeyUp]);

    return (
        <div className="profileModalOverlay">
            <div className="profileModal" ref={modal}>
                <div
                    className="closeButton"
                    onClick={onCloseRequest}
                />
                {children}
            </div>
        </div>
    )
}

export default Modal
