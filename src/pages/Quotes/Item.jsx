import React from 'react'
import { Link } from 'react-router-dom'

function Item({ quote }) {
 return (
  //Author eklenecek
  <div>
   <p>
    <b>
     <strong>{quote.author} :</strong>
     <Link className='qouteLink' to={'/quotes/'+quote.quote_id}>
      <q>
       {quote.quote}
      </q>
     </Link>
    </b>
    <hr />
   </p>
  </div>
 )
}

export default Item