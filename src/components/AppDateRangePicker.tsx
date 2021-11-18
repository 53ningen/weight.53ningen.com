import DateFnsAdapter from '@mui/lab/AdapterDateFns'
import DateRangePicker from '@mui/lab/DateRangePicker'
import { DateRange } from '@mui/lab/DateRangePicker/RangeTypes'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'

interface Props {
  dateRange: DateRange<Date>
  setDateRange: (newValue: DateRange<Date>) => void
}

export const AppDateRangePicker = ({ dateRange, setDateRange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={DateFnsAdapter} dateFormats={{ keyboardDate: 'yyyy-MM-dd' }}>
      <DateRangePicker
        mask='____-__-__'
        startText='From'
        endText='To'
        value={dateRange}
        maxDate={new Date()}
        onChange={(newValue) => {
          setDateRange(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}
