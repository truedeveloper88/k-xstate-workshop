import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Link from '../src/Link'

const useStyles = makeStyles({
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
})

export default function Index() {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Xstate Workshop Demo
        </Typography>
        <Box className={classes.linkContainer}>
          <Link href="/simple-toggle" color="primary">
            toggle example
          </Link>
          <Link href="/simple-timer" color="primary">
            timer example
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
