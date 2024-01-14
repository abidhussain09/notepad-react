import { useState } from "react";

function EditNotePopup({setShowEditNote,showEditNote,setIsActive,isactive,handleChanges,notes}){
    const [content, setContent] = useState(notes.find(note => note.id === showEditNote.id).text);
    function handleSubmit(e) {
        e.preventDefault();
        handleChanges(showEditNote.id,content);
        RemoveEditPopup();
    }
    function RemoveEditPopup(){
        setIsActive(!isactive);
        setShowEditNote({
            show:false,
            id:null
        });
    }


    return(<div className="border-2 border-green-500 bg-white flex w-[24rem] flex-col p-[2rem] rounded-[1rem] text-center justify-center items-center">
        <div className="flex justify-between w-[100%]" >
            <h2 className="text-3xl">Edit Note</h2>
            <div className="cursor-pointer" onClick={()=>RemoveEditPopup()}>
            <i className="fa-solid fa-circle-xmark fa-xl"></i>
            </div>
        </div>
        <form className="flex flex-col gap-[1rem] mt-[1rem]" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="note"></label>
            <textarea name="note" value={content} onChange={(e) => setContent(e.target.value)} className="p-[1rem] border-2 outline-none border-[rgb(206,206,206)]" cols={30} rows={10}>
            </textarea>
            </div>
            <button className="bg-black text-white hover:bg-[#414040] hover:text-black w-[100%] self-center p-2 mt-6 border-solid border-2 rounded-full transition duration-500"
            type="submit">
                Submit
            </button>
        </form>
    </div>)
}
export default EditNotePopup;