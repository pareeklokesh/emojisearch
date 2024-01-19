import React from "react";
import Datajson from "../json/emojiList.json"
import { useState } from "react";

function Emojisearch() {
    const [search, setSearch] = useState("");

    const filterData = Datajson.filter((emoji) => 
    emoji.title.toLowerCase().includes(search.toLowerCase()) ||
    emoji.symbol.toLowerCase().includes(search.toLowerCase()) ||
    emoji.keywords.toLowerCase().includes(search.toLowerCase())
    );
const getJsonData = filterData.map((emoji, index) => {
    return (
        <>
        <tr key={index}>
            <td>{emoji.title}</td>
            <td>{emoji.symbol}</td>
            <td>{emoji.keywords}</td>
        </tr>
        </>
    )
})
    return(
        <>
        <div className="container py-3">
            <input className="form-control mb-3" type="text" placeholder="Search by title, symbol, or keywords..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Symbol</th>
                    <th>Keywords</th>
                </tr>
            </thead>
            <tbody>
                {getJsonData}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Emojisearch;