import { useState } from "react";
import emoji from "./emoji.json";
//

const data = emoji;
const emojiObj = Object.values(data);
//

export default function App() {
  const [searchField, setSearchFelid] = useState("");

  const filteredPersons = emojiObj.filter((emoji) => {
    return (
      emoji.description.toLowerCase().includes(searchField.toLowerCase()) ||
      emoji.tags.includes(searchField.toLowerCase())
    );
  });

  return (
    <div className="app-container">
      <Header />
      <Search searchField={searchField} setSearchFelid={setSearchFelid} />
      <List emoji={filteredPersons} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>
        <span className="emoji-icon">🤪</span>Emoji Searcher
        <span className="emoji-icon">🧐</span>
      </h1>
    </header>
  );
}

function Search({ searchField, setSearchFelid }) {
  function handleChange(value) {
    setSearchFelid(value);
  }
  return (
    <input
      className="search-input"
      type="text"
      value={searchField}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Type here"
    />
  );
}

function List({ emoji }) {
  return (
    <div className="content">
      <ul>
        <ListItem emoji={emoji} key={emoji.description} />
      </ul>
    </div>
  );
}

function ListItem({ emoji }) {
  return (
    <>
      {emoji.map((emoji) => (
        <li>
          <p className="emoji-description" key={emoji.description}>
            <span className="emoji-icon">{emoji.emoji}</span>
            {emoji.description}
          </p>
        </li>
      ))}
    </>
  );
}
