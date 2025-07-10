import { useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"

export default function FormUpdate(){
    //ambil param di url
    const{id} = useParams()
    const navigate = useNavigate();
    const [data,setData] = useState({name:"",description:""})
    //ambil data dan masukan ke input
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:3000/api/group/${id}`);
                if (!res.ok){
                    throw new Error('not found')
                }
                const dat = await res.json();
                setData(dat)
                
            } catch (error) {
                console.log(error)
            }
            
        }
        getData();
    },[id])
    // update
    async function handleUpdate(e){
        e.preventDefault();
        try{
            const res = await fetch(`http://localhost:3000/api/group/${id}`,{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify(data)
            })
            navigate('/dashboard')
            setData({name:"",description:""});
            console.log(res)
        }catch(e){
            console.log(e)
        }


    }
    return(
        <>
            <div className="group-container">
                <h1> Update Group</h1>
                <form onSubmit={handleUpdate}>
                    <div className="box">
                        <label>Name</label>
                        <input
                           value={data.name}
                           onChange={(e) => setData({...data,name:e.target.value})}
                        />
                    </div>
                    <div className="box">
                        <label>Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData({...data,description:e.target.value})}
                        ></textarea>
                    </div>
                    <div><button type="submit">submit</button></div>
                </form>
            </div>
        </>
    )
}