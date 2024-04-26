import React from "react";
import axios from "axios";

function TextInput() {
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [copies, setCopies] = React.useState(0);

  const handleClick = () => {
    const toDb = axios.post("http://localhost:8000/add", {
      name: name,
      author: author,
      copies: copies,
    });
    toDb.then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>

      <label>
        Copies:
        <input
          type="number"
          value={copies}
          onChange={(event) => setCopies(event.target.value)}
        />
      </label>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default TextInput;
