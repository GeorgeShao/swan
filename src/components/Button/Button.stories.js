import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

export const Small = () => <Button variant='primary' size='small'>Small</Button>
export const Medium = () => <Button variant='primary' size='medium'>Medium</Button>
export const Large = () => <Button variant='primary' size='large'>Large</Button>
