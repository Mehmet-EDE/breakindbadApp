import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice'
import Item from './Item'
function Quotes() {
 const data = useSelector(quotesSelector)
 const status = useSelector(statusSelector)
 const error = useSelector(errorSelector)
 const dispatch = useDispatch()
 useEffect(() => {
  if(status==='idle') dispatch(fetchAllQuotes())
 }, [])
 if (error) {
  return (
   <div>
    <h1>Error:{error}</h1>
   </div>
  )
 }
 return (
  <div>
   <h1>Qoutes</h1>
   {status === 'loading' && <h1>Loading...</h1>}
   {status === 'succededd' && data.map(item => (
    <Item key={item.quote.id} quote={item} />
   ))}
  </div>
 )
}

export default Quotes