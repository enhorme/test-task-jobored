import { Select } from '@mantine/core'

import { useState } from 'react'
import {
  ReactComponent as SelectArrow
} from '../../assets/images/select-arrow.svg'

const FilterSelect = () => {
  const [open, setIsOpen] = useState(false)

  const mockList = ['1', '2', '3']

  return (
    <Select
      data-elem='industry-select'
      className='custom-select'
      rightSection={
        <SelectArrow className={open ? 'select-arrow-open' : undefined} />
      }
      onDropdownClose={() => setIsOpen(false)}
      onDropdownOpen={() => setIsOpen(true)}
      rightSectionWidth={30}
      styles={{
        cursor: 'pointer',
        rightSection: { pointerEvents: 'none' }
      }}
      onChange={console.log}
      placeholder='Выберете отрасль'
      data={mockList}
    />
  )
}

export default FilterSelect
