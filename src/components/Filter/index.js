import { NumberInput } from '@mantine/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as Close } from '../../assets/images/close.svg'
import { resetFilter, setFilters } from '../../redux/slices/filterSlice'
import PrimaryButton from '../PrimaryButton'
import CustomSelect from './CustomSelect'

const Filter = () => {
  const [paymentFrom, setPaymentFrom] = useState('')
  const [paymentTo, setPaymentTo] = useState('')
  const [catalog, setCatalog] = useState('')

  const dispatch = useDispatch()

  const handleResetForm = () => {
    setPaymentFrom('')
    setPaymentTo('')
    setCatalog('')
    dispatch(resetFilter())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilters({
      payment_from: paymentFrom,
      payment_to: paymentTo,
      catalogues: catalog,
      no_agreement: !!paymentFrom ||
      !!paymentTo ? 1 : 0
    }))
  }

  return (
    <article className='filter'>
      <form onSubmit={handleSubmit}>
        <div className='filter__header'>
          <span className='filter__title'>Фильтры</span>
          <div className='filter__reset' onClick={handleResetForm}>
            <label htmlFor='reset'>Сбросить все</label>
            <Close id='reset' />
          </div>
        </div>
        <div className='filter__select'>
          <div className='filter__catalogues'>
            <span className='filter__subtitle'>Отрасль</span>
            <CustomSelect catalog={catalog} setCatalog={setCatalog} />
          </div>

          <div className='filter__salary'>
            <span className='filter__subtitle'>Оклад</span>
            <NumberInput
              data-elem='salary-from-input'
              value={paymentFrom}
              onChange={setPaymentFrom}
              placeholder='От'
              max={500000}
              step={500}
              min={0}
            />
            <NumberInput
              data-elem='salary-from-to'
              value={paymentTo}
              onChange={setPaymentTo}
              placeholder='До'
              max={500000}
              step={500}
              min={0}
            />
          </div>
        </div>
        <PrimaryButton
          type='submit'
          title={'Применить'}
        />
      </form>
    </article>
  )
}

export default Filter