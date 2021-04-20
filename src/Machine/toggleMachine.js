import { Machine } from 'xstate'

const toggleMachine = Machine({
  initial: 'inactive',
  states: {
    active: {
      on: {
        TOGGLE: 'inactive',
      },
    },
    inactive: {
      on: {
        TOGGLE: 'active',
      },
    },
  },
})

export default toggleMachine
