export function HangmanWord() {
  const word = 'test'

  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {word.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em soliid black' }}>
          <span style={{ visibility: 'hidden' }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}
