import { HTMLAttributes } from 'react'

export function UiButton(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
      {...props}
    />
  )
}
