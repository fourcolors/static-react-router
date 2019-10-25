import * as React from 'react'
import { useState } from 'react'
import history from './utils/history'

export type RoutesType = {
  path: String
  component: React.Component
  check: Function
  redirect: String
}

export type RouterPropType = {
  routes: RoutesType
  NotFound: React.Component
}

export const Router: React.SFC<RouterPropType> = ({ routes, NotFound }) => {
  const [location, setLocation] = useState(history.location)
  return <div />
}