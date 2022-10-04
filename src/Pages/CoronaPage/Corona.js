import React,{useState} from 'react';
import './Corona.css';
import axios from 'axios';

const Corona = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState({name: '' , confirmed: '', deaths: ''})
    const [loading, setLoading] = useState(false)
    const hendleSend = () => {
        setLoading(true);
        let f = setTimeout(()=>{axios.get(`https://corona-api.com/countries/${name}`)
        .then((res) => {
            console.log(res)
            if (Object.keys(res.data.data).length === 0) {
                alert("Inch vor ban ayn che")
            } else {
                const name = res.data.data.name
                console.log(name)
                setData((data) =>{
                    return {...data,name:name}
                })
                
            } 
        
            const confirmed = res.data.data.latest_data.confirmed
            setData((a) =>{
                return {...a,confirmed:confirmed}
            })

            const deaths = res.data.data.latest_data.deaths
            setData((g) =>{
                return {...g,deaths:deaths}
            })
        })
        clearTimeout(f)
        setLoading(false)
        },2000)

        
    }
    const hemdleChange = (e) => {
        const {value} = e.target;
        setName(value)
    }
    if (loading) {
        return <div>Loading...</div>
    }

    console.log(data);
    return (
        <div>
            <div className='inpbut'>
                <input className='inpu' onChange={hemdleChange}/>
                <button className='butt' onClick={hendleSend}>click</button>
            
            {data.name !== '' && <div>Երկիր {data.name}</div>}
            {data.confirmed !== "" ? <div>Հաստատված {data.confirmed}</div> : null}
            {data.deaths !== '' && <div>Որից մահացածներ {data.deaths}</div>}
            </div>
        </div>
    )
}
export default Corona
