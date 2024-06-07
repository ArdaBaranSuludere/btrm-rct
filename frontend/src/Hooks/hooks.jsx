import { useState, useEffect } from "react";
import { fetchData } from "./helper";

const useAuth = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null); // Make this user object
    const [error, setError] = useState(null);

    const login = async (body) => {
        try {
            const url = "http://127.0.0.1:5000/login";
            const options = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body
            };
            const {data} = await fetchData(url, options);
            if (data.isLoggedIn) {
                setAuthenticated(true);
                setUserId(data);
                return true;
            } else {
                setAuthenticated(false);
                return false;
            }
        } catch (error) {
            setError(error.message);
            setAuthenticated(false);
        }
    }

    const register = async (body) => {
        try {
            const url = "http://127.0.0.1:5000/register";
            const options = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body
            };
            const response = await fetch(url, options);
            if (response.ok) {
                return true;
            }
            return false;
        } catch (error) {
            setError(error.message);
        }
    }

    const logout = async () => {
        try {
            const url = "http://127.0.0.1:5000/logout";
            const options = {method: "GET"};
            await fetch(url, options);
            setAuthenticated(false);
            setUserId(null);
        } catch (error) {
            setError(error.message);
            setAuthenticated(false);
            setUserId(null);
        }
    }

    const checkAuth = async () => {
        try {
            const url = "http://127.0.0.1:5000/checkauth";
            const {data} = await fetchData(url);
            console.log(data.isLoggedIn)
            if (data.isLoggedIn) {
                setAuthenticated(true);
                setUserId(data);
            } else {
                setAuthenticated(false);
                setUserId(null);
            }
        } catch (error) {
            setError(error.message);
            setAuthenticated(false);
        }
    }

    return {isAuthenticated, userId, error, login, logout, register, checkAuth};
}

export {useAuth}