import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react";
export default function PostList(){
    const navigate = useNavigate();
    const [arr,setArr] = useState([])
    //setiap run kita load this
    
    useEffect(() => {
    
        async function getData(){
            
            try{
                const res = await fetch('http://localhost:3000/api/dashboard');
                if(!res.ok){
                    throw new Error('empty data');
                }
                const data = await res.json();
                setArr(data);

            }catch(e){
                console.log(e);
            }
        };
        getData()
    },[])
    

    //fungsi update
    function handleUpdate(e,val){
        e.stopPropagation();
        //navigate ke form update
        navigate(`/dashboard/group/${val}/update`);
    }
      //fungsi update
    async function handleDelete(e,val){
        e.stopPropagation();
        try{
            const res = await fetch(`http://localhost:3000/api/group/${val}`,{
                method:'DELETE'
            });
            if(!res.ok){
                alert('delete failed')
                return;
            }
            //buat realtime UI habis delete
            //dar mongodb useeffect ketambahan ._id
            const filtered = arr.filter((item) => item._id != val)
            setArr(filtered)
        }catch(e){
            console.log(e)
        }
      
    }
    return (
        <>
            <header>
                <h1>Welcome</h1>
                <Link to='/post'><h1>Create Post</h1></Link>
            </header>
            <div className='show-list'>
                {arr.map((item,index) => (
                    <div key={index} className='item-bx' 
                    onClick={() => navigate(`/dashboard/post/${item._id}`)}>
                        {item.name}
                        <button onClick={(e) => {handleUpdate(e,item._id)}}>update</button>
                        <button onClick={(e) => {handleDelete(e,item._id)}}>delete</button> 
                    </div>
                ))}
            </div>
        </>
    )
}