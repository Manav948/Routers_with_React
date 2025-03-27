import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 mt-5 mb-5 rounded-2xl">
            <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden p-6 text-center">
                <img
                    className="w-32 h-32 mx-auto rounded-full border-4 border-orange-700"
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">{data.name || "GitHub User"}</h2>
                <p className="text-gray-600">@{data.login}</p>
                
                <div className="mt-4 flex justify-around text-lg font-medium gap-3">
                    <div>
                        <p className="text-orange-700">{data.followers}</p>
                        <p className="text-gray-600">Followers</p>
                    </div>
                    <div>
                        <p className="text-orange-700">{data.public_repos}</p>
                        <p className="text-gray-600 ">Repositories</p>
                    </div>
                </div>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-2 text-white bg-orange-700 rounded-full hover:bg-orange-800"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
}

export default Github;

export const Githubloader = async () => {
    const res = await fetch("https://api.github.com/users/Manav948z`");
    const data = await res.json();
    return data;
};
