import React, { useState } from 'react'

function App() {
  const [wordToGuess, setWordToGuess] = useState('Test')

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      {' '}
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose win</div>
    </div>
  )
}

export default App
