import React, { useEffect } from 'react'
import { useMachine } from '@xstate/react'

import timerMachine from '../src/Machine/timerMachine'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import StopIcon from '@material-ui/icons/Stop'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import SimpleCard from '../src/SimpleCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  timer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    fontSize: 24,
  },
})

export default function SimpleToggle() {
  const [state, send] = useMachine(timerMachine)
  const classes = useStyles()
  const { duration, elapsed, interval } = state.context

  useEffect(() => {
    const intervalId = setInterval(() => {
      send({ type: 'TICK' })
    }, interval * 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <SimpleCard>
      <Typography variant="h5" component="h2">
        {state.value}
      </Typography>
      <div className={classes.timer}>
        <IconButton
          onClick={() => {
            send({ type: 'TOGGLE' })
          }}
        >
          <Typography className={classes.title} color="textSecondary">
            {state.value === 'expired' ? 0 : Math.ceil(duration - elapsed)}
          </Typography>
        </IconButton>
        {state.value === 'running' && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => {
              send({ type: 'ADD_MINUTE' })
            }}
          >
            1:00
          </Button>
        )}
        {state.value !== 'running' && (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<RotateLeftIcon />}
            onClick={() => {
              send({ type: 'RESET' })
            }}
          >
            Reset
          </Button>
        )}
      </div>
      {state.value === 'running' && (
        <IconButton
          onClick={() => {
            send({ type: 'TOGGLE' })
          }}
        >
          <StopIcon />
        </IconButton>
      )}
      {(state.value === 'paused' || state.value === 'idle') && (
        <IconButton
          onClick={() => {
            send({ type: 'TOGGLE' })
          }}
        >
          <PlayCircleFilledIcon />
        </IconButton>
      )}
    </SimpleCard>
  )
}
