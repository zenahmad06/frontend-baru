import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Group(){
    const [form, setForm] = useState({
        name:"",
        description:"",
    })
    const navigate = useNavigate()
    //create group
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:3000/api/group/post',{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify(form)
            })
            navigate('/dashboard')
            setForm({name:"",description:""});
        }catch(e){
            console.log(e)
        }


    }
    return (
        <>
            <div className="group-container">
                <h1> Create Group</h1>
                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <label>Name</label>
                        <input
                           value={form.name}
                           onChange={(e) => setForm({...form,name:e.target.value})}
                        />
                    </div>
                    <div className="box">
                        <label>Description</label>
                        <textarea
                            value={form.description}
                            onChange={(e) => setForm({...form,description:e.target.value})}
                        ></textarea>
                    </div>
                    <div><button type="submit">submit</button></div>
                </form>
            </div>
        </>
    )
}