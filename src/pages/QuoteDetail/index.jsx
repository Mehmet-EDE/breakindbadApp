import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { quotesSelector } from '../../redux/quotesSlice'
function QuoteDetail() {
 const { quote_id } = useParams()
 const data = useSelector(quotesSelector)
 const quote = data.find(item => item.quote_id == quote_id)
 if (!quote) {
  return (
   <Redirect to='/quotes' />
  )
 }
 return (
  <div>
   <pre>
    {JSON.stringify(quote)}
   </pre>
  </div>
 )
}

export default QuoteDetail