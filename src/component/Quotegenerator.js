import React from "react";
import { useState } from "react";


function Quotegenerator() {
    const [quotes, setQuotes] = useState(0);
    const quoteChange = () => {
        setQuotes((prevQuotes) => (prevQuotes + 1) % quoteall.length);
    }
    const quoteall = [
        {
            "title": "What is Lorem Ipsum?",
            "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
            "title": "Why do we use it?",
            "des": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          },
          {
            "title": "Where does it come from?",
            "des": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
    ]
    return (
        <>
        <div className="container py-3">
            <button className="btn btn-primary" onClick={quoteChange}>New Quote</button>
        <div className="card mt-3" style={{ width: "25rem" }}>
  <div className="card-body">
    <h5 className="card-title">{quoteall[quotes].title}</h5>
    <p className="card-text">
    {quoteall[quotes].des}
    </p>
  </div>
</div>
</div>
        </>
    )
}

export default Quotegenerator;