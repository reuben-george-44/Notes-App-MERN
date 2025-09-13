import { useState } from "react"
import Note from "./Note"

const MainPage = ({user}) => {
  const handleSubmit = () => {

  }
  const [notes, setNotes] = useState([]);
  return (
    <div className="fixed inset-0 bg-black font-mate">
      <h1 className="text-white">Welcome {user}</h1>
      <div className="absolute top-3 right-3 rounded-full bg-white">
        {/* Hello */}
      </div>
      {
        notes.map((note) => {
          <Note title={note.title} desc={note.desc}></Note>
        })
      }
      <form onSubmit={handleSubmit}>
        <input value={n} type="text" />
        <input type="text" />
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default MainPage