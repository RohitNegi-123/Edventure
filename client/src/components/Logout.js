import React from "react";
const Logout = () => {
    const logg = () => {
        localStorage.clear();
        window.open("/", "_self")
    }
    return (
        <div>
            {logg()}
        </div>

    )
}
export default Logout;