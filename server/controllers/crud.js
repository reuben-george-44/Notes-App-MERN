import Note from "../models/models"

const addNote = async (req, res, next) => {
    try{
        const { title, description } = req.body;
    
        const newNote = new Note({
            title,
            description
        })
    
        const savedNote = newNote.save()
    
        return res.status(200).json(savedNote)
    }catch(err){
        next(err)
    }
}

export default addNote