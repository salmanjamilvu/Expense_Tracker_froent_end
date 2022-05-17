import React from 'react'
import { useGetLabelsQuery } from '../redux/apiSlice'
import { getLabels } from '../helper/helper'

const Labels = () => {
    const { data, isFetching, isSuccess, isError } = useGetLabelsQuery()
    let Transaction
    if(isFetching){
        Transaction = <div>Fetching</div>;
    }else if(isSuccess) {
        const result = data.data
        //get sum of all transaction
        Transaction = getLabels(result).map((value, key) =>      
            <LabelComponent key={key} data={value} />
        )
    }else if(isError){
        Transaction = <div>Error</div>
    }
    
  return (
    <>
        {Transaction}
    </>
  )
}
export default Labels

function LabelComponent({data}) {
    if(!data) return <></>
    return(
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? "#f9c74f"}}></div>
                <h3 className='text-md'>{data.type??""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent)??0}%</h3>
        </div>
    )
}