import React from "react";
import { useParams } from "react-router-dom";
function User() {    
    const { id } = useParams();
    return (
        <div>
            <h1 className="bg-orange-700 text-3xl text-center rounded-full text-white p-3 mt-5 mb-5 ">User : {id}</h1>
        </div>
    );
}

export default User;