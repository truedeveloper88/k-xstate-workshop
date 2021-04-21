import { createMachine } from 'xstate'

const toggleMachine = createMachine({
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
