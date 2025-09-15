const Note = ({ notes, setNotes, id, title, desc }) => {
    const handleDelete = (targetId) => {
        setNotes(notes.filter(note => note.id !== targetId));
    }

    return (
        <div className="min-h-10 bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-4xl">{title}</h1>
            <p>{desc}</p>
            <button className="border-2" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default Note;
