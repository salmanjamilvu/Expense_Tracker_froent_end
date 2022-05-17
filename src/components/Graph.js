import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Labels from './Labels'
import { useGetLabelsQuery } from '../redux/apiSlice'
import { chart_Data, getTotal } from '../helper/helper'

Chart.register(ArcElement)
const Graph = () => {
  const { data, isFetching, isSuccess, isError } = useGetLabelsQuery()
  const result = data.data
  let graphData
  if(isFetching){
    graphData = <div>Fetching</div>;
  }else if(isSuccess) {
    graphData = <Doughnut {...chart_Data(result)} />
  }else if(isError){
    graphData = <div>Error</div>
  }


  return (
    <div className='flex justify-content max-w-xs mx-auto'>
        <div className='item'>
            <div className='chart relative'>
                {graphData}
                <h3 className='mb-4 font-bold title'>
                    Total
                    <span className='block text-3xl text-emerald-400'>${getTotal(result) ?? 0}</span>
                </h3>
            </div>

            <div className='flex flex-col py-10 gap-4'>
                <Labels />
            </div>
        </div>
    </div>
  )
}

export default Graph