import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detail() {
     const [char, setChar] = useState(null)
     const [loading, setLoading] = useState(true)
     const { charId } = useParams()
     useEffect(() => {
          axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters/${charId}`).then((res) => {
               console.log(res.data);
               setChar(res.data[0])
          }).finally(() => setLoading(false))
     }, [charId])

     console.log(charId);
     return (
          <div>
               {
                    loading && <h1>Loading...</h1>
               }
               {
                    char && <div>
                         <h1>{char.name}</h1>
                         <img src={char.img} style={{ width: '50%' }} />
                    </div>
               }
               { 
                    char && <code>{JSON.stringify(char)}</code>
               }
          </div>
     )
}

export default Detail