import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        if (formData.email.length <= 3) {
            setError('Please enter a valid email');
        } else if (formData.password.length < 4) {
            setError('Please enter a password with at least 4 characters');
        } else {
            setError('');
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="container-fluid mt-5">
            <div className="container">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            aria-describedby="emailHelp"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <div className="form-text text-danger">
                        {error}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
