import { useState } from "react";


function AddNotePopup({ setShowPop,showpopup,setIsActive,isactive,notes,setNotes}) {
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#8aff8a");
    function handleSubmit(e) {
        e.preventDefault();
        if (!content) return;
        const newNote = {
            text: content,
            date: new Date().toLocaleDateString(),
            id: Math.random() * 100000,
            color,
        };
        // localStorage.setItem("notes", JSON.stringify([newNote, ...notes]));
        setNotes([newNote, ...notes]);
        RemovePopup();
    }
    function RemovePopup(){
        setShowPop(!showpopup);
        setIsActive(!isactive);
    }
    return (<div className="border-2 border-green-500 flex flex-col  text-center justify-center items-center bg-white w-25rem rounded-3xl p-8 gap-4">
        <div className="flex justify-between w-[100%]" >
            <h2 className="text-3xl" >New Note</h2>
            <div>
                <i class="fa-solid fa-circle-xmark fa-xl" onClick={()=>RemovePopup()}></i>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="note"></label>
                <textarea placeholder="I wanted to...." name="note" value={content} onChange={(event) => setContent(event.target.value)} cols={30} rows={10} className="p-[1rem] border-2 outline-none border-[rgb(206,206,206)]" ></textarea>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex gap-3 w-full justify-between">
                    <div className="rounded-full overflow-hidden w-[30px] h-[30px] mt-6 ">
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} className="border-none p-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer" />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white hover:bg-[#414040] hover:text-black w-1/2 self-center p-2 mt-6 border-solid border-2 rounded-full transition duration-500"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    </div>)
}
export default AddNotePopup;