import React from 'react'
import { Button } from '@chakra-ui/core'
import { text } from '@storybook/addon-knobs'

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button onClick={() => console.log('button click')} variantColor="green">{text('Label', 'Button Label')}</Button>
export const Danger = () => <Button onClick={() => console.log('button click')} variantColor="red">{text('Label', 'Button Label')}</Button>