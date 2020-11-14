import { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS 10 - Image Component</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple example showing the new Image Component from NextJS 10"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'LCP': {
      const { value } = metric

      let score
      if (value <= 2500) {
        score = '🟢 Good'
      } else if (value > 2500 && value <= 4000) {
        score = '🟠 Needs Improvements'
      } else if (value > 4000) {
        score = '🔴 Poor'
      }

      const formatted = (value / 1000).toFixed(2)

      console.log(`🖼️ Largest Contentful Paint: ${score} - ${formatted}s`)
      break
    }
    case 'CLS': {
      const { value } = metric

      let score
      if (value <= 0.1) {
        score = '🟢 Good'
      } else if (value > 0.1 && value <= 0.25) {
        score = '🟠 Needs Improvements'
      } else if (value > 0.25) {
        score = '🔴 Poor'
      }

      console.log(`🔽 Cumulative Layout Shift: ${score}`)
      break
    }
    default:
      break
  }
}

export default App
