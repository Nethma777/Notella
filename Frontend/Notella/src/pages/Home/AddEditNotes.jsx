import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose, MdEditNote } from 'react-icons/md';
const AddEditNotes = ({NoteData,type,onClose}) => {

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [error, setError]=useState([]);

    const addNewNote = async () => {};

    const editNote = async () => {};

    const handleAddNote = () => {
        if(!title){
            setError("Please add a title");
            return;
        }
        if(!content){
            setError("Please add content");
            return;
        }
        setError("");	

        if(type === 'edit'){
          MdEditNote()
        }else{
            addNewNote();
        }
    };
    return (

        
        <div className='relative'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bf-slate-50 ' onClick={onClose}>
                <MdClose className="text-xl text-slate-400"></MdClose>
            </button>
            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-950 outline-none"
                    placeholder='Go to gym at 5pm'
                    value={title}
                    onChange={({target}) => setTitle(target.value)} 
                />
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label className="input-label">CONTENT</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={({target}) => setContent(target.value)}
                />
            </div>
            <div className='mt-3'>
                <label className='input-label'>TAGS</label>
                <TagInput tags={tags} setTags={setTags}/>
            </div>

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
            <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
                ADD
            </button>
        </div>
    )
}

export default AddEditNotes