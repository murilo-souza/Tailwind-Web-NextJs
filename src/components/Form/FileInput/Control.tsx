import { ComponentProps } from 'react'

interface ControlProps extends ComponentProps<'input'> {}

export function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />
}
