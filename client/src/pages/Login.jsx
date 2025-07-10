import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate()
    const [data,setForm] = useState({
        name:"",
        email:"",
        password:"",
    });
    async function handleSubmit(e) {

        e.preventDefault()
        /*
         try{
            const sendData = await fetch('http://localhost:3000/api/post',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            });
            const dataRes = await sendData.json()
            if(!dataRes.ok){
                alert(sendData.message);
                return;
            }
            //reset
            setForm({
                 name:"",
                email:"",
                password:"",
            })
        }catch(e){
            console.log(e.message)
        }
        */
        navigate('/dashboard')
        
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-isi">
                <div className="box">
                    <h1>Login</h1>
                </div>

                <div className="box">
                    <label>Email</label>
                    <input
                        type='email'
                        value={data.email}
                        onChange={(e) => setForm({...data,['email']:e.target.value})}
                    />
                </div>
                <div className="box">
                    <label>Password</label>
                    <input
                        type='password'
                        value={data.password}
                        onChange={(e) => setForm({...data,['password']:e.target.value})}
                    
                    />
                </div>
             
                <div className="box">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div className="loginOptions">
                <h3>atau Login with :</h3>
                <div><a href="google.com">google</a></div>
            </div>
        </>
    )
}