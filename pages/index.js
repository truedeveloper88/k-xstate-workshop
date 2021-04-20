import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../src/Link'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Xstate Workshop Demo
        </Typography>
        <Link href="/simple-toggle" color="primary">
          toggle example
        </Link>
      </Box>
    </Container>
  )
}
