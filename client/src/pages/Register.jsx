import { useState} from "react";
import {useNavigate } from 'react-router-dom'
export default function Register(){
    const navigate = useNavigate();
    const [data,setForm] = useState({
        name:"",
        email:"",
        password:"",
    });
    //get
    async function handleSubmit(e) {
        e.preventDefault()
        if(data.password.length < 5){
            alert('password');
            return
        };

        
         setForm({
                 name:"",
                email:"",
                password:"",
                confirmPassword:""
        })
        alert('data registerd')
        navigate('/login')
        /*
        try{
            const sendData = await fetch('http://localhost:3000/api/post',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            });
            //jika email sama
            const res = await sendData.json
            if(!res.ok){
                alert('Email sudah terdaftar');
                return;
            }
            //reset
            setForm({
                 name:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }catch(e){
            console.log(e.message)
        }
        */
        
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-isi">
                <div className="box">
                    <h1>Register</h1>
                </div>
                <div className="box">
                    <label>Nama</label>
                    <input value={data.name} onChange={(e) => setForm({...data,["name"]:e.target.value})} required/>
                </div>
                <div className="box">
                    <label>Email</label>
                    <input value={data.email} onChange={(e) => setForm({...data,["email"]:e.target.value})} required/>
                </div>
                <div className="box">
                    <label>Password</label>
                    <input value={data.password} onChange={(e) => setForm({...data,["password"]:e.target.value})} required/>
                </div>
                <div className="statusMsg">
                    {data.password && (data.password.length > 5
                        ? <p style={{color:'green'}}>password lebih dari 6</p>
                        : <p style={{color:'red'}}>password kurang dari 6</p>
                    )}
                </div>
                 <div className="box">
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}