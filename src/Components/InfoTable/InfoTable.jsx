import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import Api from '../../Constants/axios'
import './InfoTable.css'

function InfoTable() {
    const [refresh, setRefresh] = useState(false)
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        Api.get('/getInsight').then((response) => {
            setTableData(response.data.data)

        })
    }, [refresh])
    const addFav=(id)=>{
        let data={
            id:id
        }
        Api.patch('/addFavourites',data).then(()=>
        setRefresh(!refresh)
        )
        
    }
    const removeItem=(id)=>{
        let data = {
            id:id
        }
        Api.post('/removeInsight',data).then(()=>
            setRefresh(!refresh)
        )
    }

    return (

        <div>
            <div className='background'>
                <Table responsive="sm" hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Link</th>
                            <th>No: of words</th>
                            <th>Favourite</th>
                            <th className='url-colum'>urls</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((i, index) =>
                            <tr>
                                <td>{parseInt(index) + 1}</td>
                                <td>{i.link}</td>
                                <td>{i.words}</td>
                                <td>{i.favourite}</td>
                                <td className='text-right '>{i.urls.map(j => <p >{j},</p>)}</td>
                                <td><Button variant="warning" onClick={()=>addFav(i._id)}>add to favourite</Button>{' '}
                                    <Button variant="danger" onClick={()=>removeItem(i._id)}>Remove</Button></td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default InfoTable