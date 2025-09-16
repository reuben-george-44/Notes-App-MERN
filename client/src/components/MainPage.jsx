import { useState } from "react"
import Note from "./Note"
import { v4 as uuidv4 } from "uuid";
import axios from "axios"

const MainPage = ({user}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      desc,
    };

    setNotes(notes => [...notes, newNote])

    try {
      const res = await axios.post("http://localhost:5000/api/notes", newNote);
      console.log("Saved to backend:", res.data);

    } catch (err) {
      console.error("Error saving note:", err);
    }
  }

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(""); 
  return (
    <div className="fixed inset-0 font-mate">
      <h1 className="text-white">Welcome {user}</h1>
      <div className="absolute top-3 right-3 rounded-full bg-white">
        {/* Hello */}
      </div>
      {
        notes.map((note) => (
          <Note key={note.id} notes={notes} setNotes = {setNotes} id={note.id} title={note.title} desc={note.desc}></Note>
        ))
      }
      <form name="form" className="min-h-20" onSubmit={handleSubmit}>
        <input name="title" className="border-2" value={title} onChange={e => setTitle(e.target.value)} type="text" />
        <input name="desc" className="border-2" value={desc} onChange={e => setDesc(e.target.value)} type="text" />
        <button className="border-2" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default MainPage