import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
export default function PostDetail(){
    const navigate = useNavigate()
     const arr = [{title:'1'},{title:'2'},{title:'1'},{title:'2'},{title:'1'},{title:'2'}];
     const {id} = useParams()
    return(

        <>
            <div className="Detailed-Post">
                <h1 style={{color:'white',marginLeft:"20px"}}>INI nama group</h1>
                <h1 style={{color:'white',marginLeft:"20px"}}>INI Descripsi</h1>
                <h1><Link to ={`/dashboard/post/${id}/form`}>Create Room</Link></h1>
                <div className="room-cont">
                     {arr.map((item,index) => (
                    <div key={index} className='item-bx' onClick={() => navigate(`/dashboard/post/${index}/room/${index}`)}>
                        {item.title}
                            
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}