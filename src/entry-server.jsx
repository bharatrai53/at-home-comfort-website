import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { HeadCollectorCtx } from './seo/HeadCollector'

export function render(url) {
  const head = {}
  const html = renderToString(
    <HeadCollectorCtx.Provider value={(data) => Object.assign(head, data)}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadCollectorCtx.Provider>
  )
  return { html, head }
}
