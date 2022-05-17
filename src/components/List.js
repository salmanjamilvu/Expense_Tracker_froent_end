import React from 'react'
import { useGetLabelsQuery, useDeleteTransactionMutation } from '../redux/apiSlice'

const List = () => {
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery()
  const [deleteTransaction] = useDeleteTransactionMutation()
  const handleDelete = (id) =>{
    deleteTransaction(id)
    console.log(id)
  }
  let Transactions
  if(isFetching){
      Transactions = <div>Fetching</div>;
  }else if(isSuccess) {
      const result = data.data
      Transactions = result.map((value, key) =>
        <Transaction key={key} category={value} handler={handleDelete} />
      )
  }else if(isError){
      Transactions = <div>Error</div>
  }
     
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  )
}
export default List

function Transaction({category, handler}) {
  if(!category) return null
  return(
    <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight : `8px solid ${category.color}`}}>
      <button className='px-3' onClick={() => handler(category._id)}><box-icon name="trash" size="sm" color={category.color} /></button>
      <span className='block w-full'>{category.type}</span>
    </div>
  )
}