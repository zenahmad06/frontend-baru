import { useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
export default function RoomForm(){
    const {id} = useParams();
    const [form, setForm] = useState()
    const navigate = useNavigate()
    async function handleSubmit(e){
        e.preventDefault();
        navigate(`/dashboard/post/${id}`)

    }
    return (
        <>
            <div className="group-container">
                <h1> Create Group</h1>
                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <label>Name</label>
                        <input
                           
                        />
                    </div>
                    <div className="box">
                        <label>group</label>
                        <input value={id}/>
                    </div>
                    <div><button type="submit">submit</button></div>
                </form>
            </div>
        </>
    )
}