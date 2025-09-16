// main.jsx — App entry point: initializes Sentry and mounts React app
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

// Sentry setup (performance + replay). Keep values simple and readable.
Sentry.init({
  dsn: "https://9bcf66f99f76313d6bd8a7206f6af89e@o4509929247408128.ingest.us.sentry.io/4510024550711296",
  integrations:[
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    })
  ],
  tracesSampleRate: 1.0, // capture 100% of transactions (adjust in production)
  tracePropagationTargets: ["loaclhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, // sample 10% sessions
  replaysOnErrorSampleRate: 1.0, // capture 100% on errors
  sendDefaultPii: true
});

// Mount the React app into #root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
