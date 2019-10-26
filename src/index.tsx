import * as React from 'react'
import { useState, useEffect } from 'react'
import history from './utils/history'
import { find } from 'ramda'
import * as UrlPattern from 'url-pattern'

export type RouteType = {
  path: String
  component: React.SFC
  check: Function
  redirect: String
}

export type RouterPropType = {
  routes: RouteType[]
  NotFound: React.SFC
}

export const Router: React.SFC<RouterPropType> = ({ routes, NotFound }) => {
  const [location, setLocation] = useState(history.location)
  useEffect(() => {
    const unlisten = history.listen((location) => {
      setLocation(location)
    })
    return () => {
      unlisten()
    }
  })

  let params
  const route = find((route: RouteType) => {
    const pattern = new UrlPattern(route.path as string)
    return (params = pattern.match(location.pathname))
  }, routes)

  if (!route) {
    return <NotFound />
  }

  if (route.check && route.check()) {
    history.push(route.redirect as string)
    history.go(1)
    return null
  }

  return <route.component as React {...params} />
}