import Note from "../models/note.model"

const createNote =async (req,res)=>{
    const newNote= new Note({
        ...req.body
    })
    try {
        const savedNote= await newNote.save(
            res.status(201).json(savedNote)
        )
    } catch (error) {
        
    }
}

export default createNote;