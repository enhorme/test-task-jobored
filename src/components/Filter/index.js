import { NumberInput } from '@mantine/core'
import { ReactComponent as Close } from '../../assets/images/close.svg'
import CustomSelect from './CustomSelect'

const FilterBlock = () => {

  return (
    <section className='filter'>
      <form>
        <div className='filter__header'>
          <span className='filter__title'>Фильтры</span>
          <div className='filter__reset'>
            <label htmlFor='reset'>Сбросить все</label>
            <Close id='reset' />
          </div>
        </div>
        <div className='filter__select'>
          <div className='filter__catalogues'>
            <span className='filter__subtitle'>Отрасль</span>
            <CustomSelect />
          </div>

          <div className='filter__salary'>
            <span className='filter__subtitle'>Оклад</span>
            <NumberInput
              data-elem='salary-from-input'
              placeholder='От'
              max={500000}
              min={0}
            />
            <NumberInput
              data-elem='salary-from-to'
              placeholder='До'
              max={500000}
              min={0}
            />
          </div>
        </div>
        <button
          data-elem='search-button'
          type='submit'
        >Применить
        </button>
      </form>
    </section>
  )
}

export default FilterBlock