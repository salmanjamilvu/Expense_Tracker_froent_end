import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List'
import { useAddTransactionMutation } from '../redux/apiSlice'

const Form = () => {
    const { register, handleSubmit, resetField } = useForm();
    const [addTransaction] = useAddTransactionMutation()
    const onSubmit = async (data) =>{
        if(!data) return {}
        else{
            const result = await addTransaction(data).unwrap()
            console.log(result)
            resetField('name')
            resetField('amount')
        }
    }

  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-4'>
                <div className='input-group'>
                    <input type="text" {...register('name')} placeholder='Salary, House Rend, SIP' className='form-input' />
                </div>
                <select className='form-input' {...register('type')}>
                    <option value="Investment" defaultValue>Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Saving">Saving</option>
                </select>
                <div className='input-group'>
                    <input type="text" {...register('amount')} placeholder="Amount" className='form-input'/>
                </div>
                <div className='submit-btn'>
                    <button type='submit' className='border py-2 text-white bg-indigo-500 w-full'>
                        Make Transaction
                    </button>
                </div>
            </div>
        </form>
        <List />
    </div>
  )
}

export default Form