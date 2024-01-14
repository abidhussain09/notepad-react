import { useState,useEffect } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import AddNotePopup from "./components/AddNotePopup";
import EditNotePopup from "./components/EditNotePopup";



function App() {
  const [notes, setNotes] = useState([]);
  const [showpopup, setShowPop] = useState(false);
  const [isactive,setIsActive]=useState(false);
  const [showEditNote,setShowEditNote] = useState({
    show:false,
    id:null
  });

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('notes-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);


  useEffect(()=>{
    localStorage.setItem('notes-data',JSON.stringify(notes));
  },[notes]);
  function handleDelete(id) {
    const newNotes = notes.filter(notes => notes.id !== id);
    setNotes(newNotes);
  }
  function handleAddNote() {
    setShowPop(!showpopup);
    setIsActive(!isactive);
  }
  function handleEdit(id){
    setShowEditNote({
      show:true,
      id:id
    });
    setIsActive(!isactive);
  }
  function handleChanges(id, content) {
    const newNotes1 = notes.map(note => note.id === id ? { ...note, text: content } : { ...note });
    localStorage.setItem('notes-data', JSON.stringify(newNotes1));
    setNotes(newNotes1);
  }

  const [searchText, setSearchText] = useState("");

  return (
    <div className="overflow-x-hidden ">
      <div className={`fixed h-[100vh] inset-0 flex items-center justify-center ${isactive?"z-50":""}`}>
        {showpopup && <AddNotePopup setShowPop={setShowPop} showpopup={showpopup} setIsActive={setIsActive} isactive={isactive} notes={notes} setNotes={setNotes} />}
        { showEditNote.show && <EditNotePopup setShowEditNote={setShowEditNote} showEditNote={showEditNote} setIsActive={setIsActive}  isactive={isactive} handleChanges={handleChanges} notes={notes}/> }
      </div>
      <div className={`flex h-lvh  w-[100vw] font-mono relative ${isactive?"pointer-events-none":"pointer-events-auto"}`} >
        <nav className="fixed text-[16px] border-r-2 border-sky-500 h-[100vh] w-[83px] flex flex-col">
          <div className="h-[42px] w-[82px] pt-[16px] text-center">
            Docket
          </div>
          <button onClick={handleAddNote} className="mt-[32px] mb-[32px] text-center text-white bg-black rounded-[64px] text-[24px] w-[48px] h-[48px] mx-auto">
            +
          </button>
        </nav>
        <div className={`pl-[8rem] pt-[1rem] `}>
          <div>
            <div className="h-[72px] text-[16px] text-start leading-[24px] py-[11px] flex items-center">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input onChange={(event) => setSearchText(event.target.value)} type="text" placeholder="Search here..." className="rounded-[8px] h-[40px] w-[256px] py-[11px] pl-[36px] focus:outline-none" />
            </div>
            <h1 className="h-[48px] text-[32px] text-start leading-[48px] font-bold">
              Notes
            </h1>
          </div>
          <div>
            <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
