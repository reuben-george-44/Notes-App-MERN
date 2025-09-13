const Note = ({ title, desc }) => {
    return (
        <div className="min-h-10 bg-gradient-to-br from-amber-200 to-amber-400">
            <h1 className="text-4xl">{title}</h1>
            <p>{desc}</p>
        </div>
    );
};

export default Note;
