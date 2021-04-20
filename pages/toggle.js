import React from 'react'
import { useMachine } from '@xstate/react'

import toggleMachine from '../src/Machine/toggleMachine'
import SimpleCard from '../src/SimpleCard'
import CheckIcon from '@material-ui/icons/Check'
import ToggleButton from '@material-ui/lab/ToggleButton'
import Typography from '@material-ui/core/Typography'

export default function SimpleToggle() {
  const [state, send] = useMachine(toggleMachine)

  return (
    <SimpleCard>
      <Typography variant="h5" component="h2">
        {state.value}
      </Typography>

      <ToggleButton
        value="check"
        selected={state.value === 'active'}
        onChange={() => {
          send('TOGGLE')
        }}
      >
        <CheckIcon />
      </ToggleButton>
    </SimpleCard>
  )
}
