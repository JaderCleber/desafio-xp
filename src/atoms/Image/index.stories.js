import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from '.'

storiesOf('Image', module)
  .add('default', () => (
    <Image width={200} />
))