import React, { useState, useEffect } from "react";
import axios from "axios";

/*const sampleData = [
    {
        id: 1,
        title: "Title 1",
        snippet: "<strong>Some HTML</strong> snippet..."
    },
    {
        id: 2,
        title: "Title 2",
        snippet: "<i>Some other</i> snippet..."
    },
    {
        id: 3,
        title: "Title 3",
        snippet: "Third snippet..."
    },
];*/

const Search = () => {
    const [term, setTerm] = useState("arizona wildcats");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            console.log("fetching...", Date.now());

            try {
                const response = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: "query",
                        list: "search",
                        format: "json",
                        origin: "*",
                        srsearch: term
                    }
                });
    
                setData(response.data.query.search.map(item => ({
                    id: item.pageid,
                    title: item.title,
                    snippet: item.snippet
                })));
            }
            catch (ex) {
                console.log(ex);
                setData([]);
            }
        };

        console.log("useEffect", Date.now());

        if (term.length === 0) {
            setData([]);
            return;
        }
        /*else if (data.length === 0) { // this is not really reliable, especially if a query returns nothing; maybe use additional state instead
            fetchData();
            return;
        }*/
        
        const searchTimeout = setTimeout(() => fetchData(), 1000);
        return () => clearTimeout(searchTimeout);
    }, [term]);

    const onTermChange = async e => {
        e.preventDefault();
        setTerm(e.target.value);
    };

    const renderList = data.map(e => (
        <div key={e.id} className="item">
            <div className="ui right floated">
                <a className="ui right labeled icon button" 
                    href={`http://en.wikipedia.org/?curid=${e.id}`}
                    target="_blank"
                    rel="noreferrer">
                    <i className="right arrow icon"></i> Go
                </a>
            </div>
            <div className="content">
                <div className="header">{e.title}</div>
                <div className="description">{e.snippet}</div>
            </div>
        </div>
    ));

    return (
        <div>
            <form className="ui form" onSubmit={e => e.preventDefault()}>
                <div className="field">
                    <label htmlFor="term">Search</label>
                    <input id="term" type="text" value={term} onChange={onTermChange} />
                </div>
            </form>
            <div className="ui relaxed divided list">
                {renderList}
            </div>
        </div>
    );
}

export default Search;