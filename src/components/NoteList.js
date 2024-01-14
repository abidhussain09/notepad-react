
import Ele from "./Ele";

function NoteList({ notes, handleDelete,handleEdit,}){

    return (
        <div className="my-[32px] flex flex-wrap gap-[48px]">
            {notes.map((note)=> (
            <Ele text={note.text} date={note.date} id={note.id} color={note.color} handleDelete={handleDelete} handleEdit={handleEdit}  />
            ))}
            
        </div>
    );
}
export default NoteList;