import { useState, useEffect } from 'react'

function RenderWithDelay({ children, timeout, componentWhileWaiting }) {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCanRender(true)
    }, timeout)
  }, [timeout])

  if (!canRender) return componentWhileWaiting || null
  return children
}

export default RenderWithDelay
