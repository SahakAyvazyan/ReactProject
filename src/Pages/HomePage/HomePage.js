import React, { useState } from 'react';
import './HomePage.css';




export default function HomePage(){
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)

    return <div>
        <div className='Melqonyan'>
            <div className='as'>
                <div className='Monte' onClick={()=>setCount((e) => !e)}></div>
                {count && <div className='real'><a target="blank" className='a1' href='https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BB%D0%BA%D0%BE%D0%BD%D1%8F%D0%BD,_%D0%9C%D0%BE%D0%BD%D1%82%D0%B5'>Patmutyun</a></div>}
            </div>
            <div className='as'>
                <div className='Vazgen' onClick={()=>setNkar((e) => !e)}></div>
                {nkar && <div className='real'><a target="blank" className='a1' href='https://hy.wikipedia.org/wiki/%D5%8E%D5%A1%D5%A6%D5%A3%D5%A5%D5%B6_%D5%8D%D5%A1%D6%80%D5%A3%D5%BD%D5%B5%D5%A1%D5%B6'>Patmutyun</a></div>}
            </div>
            <div className='as'>
                <div className='Miaynak' onClick={()=>setReal((e) => !e)}></div>
                {real && <div className='real'><a target="blank" className='a1' href='https://hy.wikipedia.org/wiki/%D4%B1%D6%80%D5%A1%D5%B5%D5%AB%D5%AF_%D4%BD%D5%A1%D5%B6%D5%A4%D5%B8%D5%B5%D5%A1%D5%B6'>Patmutyun</a></div>}
            </div>


        </div>
    </div>


}
