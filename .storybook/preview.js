import React from 'react'
import { addDecorator } from '@storybook/react'
import Chakra from '../src/config/Chakra'
import '@storybook/addon-console'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}


addDecorator(story => (
  <Chakra>
    {story()}
  </Chakra>
))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs())
