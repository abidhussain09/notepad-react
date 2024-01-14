


function Ele({id,text,date,color,handleDelete,handleEdit}) {

    
    return (
        <div className={`min-h-[272px] z-20 flex flex-col justify-between p-[24px] text-[16px] w-[300px] rounded-[16px]`} style={{ backgroundColor: color}}>
            <span>{text}</span>
            <div className="flex items-center justify-between h-[40px]">
                <div >
                    {date}
                </div>
                <div className="flex gap-2">
                    <div onClick={()=>handleEdit(id)} className="bg-[#fafafa] opacity-50 h-[40px] w-[40px] rounded-[32px] flex justify-center items-center p-[12px] cursor-pointer">
                    <i className="fa-solid fa-pen"></i>
                    </div>
                    <div onClick={()=>handleDelete(id)} className="bg-[#faf9f9] opacity-50 h-[40px] w-[40px] rounded-[32px] flex justify-center items-center p-[12px] cursor-pointer">
                    <i className="fa-solid fa-trash" ></i>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Ele;