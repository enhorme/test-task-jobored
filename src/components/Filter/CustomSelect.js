import { Loader, Select } from '@mantine/core'
import { useState } from 'react'
import classNames from 'classnames'

import {
  ReactComponent as SelectArrow
} from '../../assets/images/select-arrow.svg'

import { useGetCataloguesQuery } from '../../redux/api/cataloguesApi'

const CustomSelect = ({ catalog, setCatalog }) => {
  const [open, setIsOpen] = useState(false)

  const { data, isFetching, isLoading, isSuccess } = useGetCataloguesQuery()

  const allCatalogues = data?.map(
    ({ key, title_rus }) => ({ value: key.toString(), label: title_rus }))
  return (

    <Select
      data-elem='industry-select'
      rightSection={
        isLoading || isFetching ? (
          <Loader color='grey' size='xs' />
        ) : (
          <SelectArrow className={classNames({ 'select-arrow-open': open })} />
        )
      }
      disabled={!isSuccess}
      onDropdownClose={() => setIsOpen(false)}
      onDropdownOpen={() => setIsOpen(true)}
      styles={{
        cursor: 'pointer',
        rightSection: { pointerEvents: 'none' }
      }}
      value={catalog}
      onChange={setCatalog}
      placeholder='Выберете отрасль'
      data={allCatalogues || []}
    />
  )
}

export default CustomSelect
