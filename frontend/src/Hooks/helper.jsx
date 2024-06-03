
const fetchData = async (url, options = {}) => {
    const response = await fetch(url, options);
    const metadata = {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
    }
    const data = await response.json();
    console.log(data)
    if (!response.ok) {
        throw new Error(data.message);
    }
    return { data, metadata };
}

export {fetchData}