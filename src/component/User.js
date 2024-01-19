import React, { useState } from "react";

export default function User() {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState([]);

    const userSearch = (e) => {
        setQuery(e.target.value);
    }

    const searchBtn = async () => {

        try {
            const res = await fetch(`https://api.github.com/search/users?q=${query}`);
            const data = await res.json();
            setUser(data.items || []);
        } catch (error) {
            console.log("Error fatching data", error);
        }

    }

    return (
        <>
            <div className="container my-3">
                <h2 className="mb-3">GitHub User Search</h2>
                <div className="d-flex">
                    <input className="form-control me-3" type="text" onChange={userSearch} placeholder="Enter username or email" />
                    <button className="btn btn-primary" onClick={searchBtn}>Search</button>
                </div>
                <div className="row">
                {user.length === 0 ? (
                    <p className="text-center mt-3">No data found</p>
                ) : (
                    user.map((userdetails) => (
                        <div className="col-md-3 mt-3" key={userdetails.login}>
                            <div className="card w-100">
                                <img className="w-100 card-img-top" src={userdetails.avatar_url} alt={userdetails.login} />

                                <div className="card-body">
                                    <h5 className="card-title">{userdetails.login}</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </p>
                                    <a href={userdetails.html_url} target="_blank" className="btn btn-primary">
                                        Profile Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                    )}

                </div>
            </div>
        </>
    )
}
