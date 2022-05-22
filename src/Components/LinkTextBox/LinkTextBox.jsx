import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form,Button,Row,Col} from 'react-bootstrap'
import Api from '../../Constants/axios'

import './LinkTextBox.css'

function LinkTextBox() {
    const navigate=useNavigate()
    const [link, setLink] = useState("")
    const submitData=()=>{
        const data={
            link:link
        }
        console.log(data); 
        Api.post('/addInsight',data).then(()=>{
            navigate('/result')
        })
    }
    return (
        <div>
            <div className='background-box'>
                <Form.Label className='link-box-label'>Paste your link:</Form.Label>
               
                <Form.Control
                    className='link-box'
                    type="text"
                    onChange={(e)=>setLink(e.target.value)}

                    />
                   
                <Button variant="secondary" className='insight-button' onClick={submitData}>Get Insights</Button>
                    
                   
            </div>

        </div>
    )
}

export default LinkTextBox