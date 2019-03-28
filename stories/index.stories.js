import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Input from '../src/atoms/Input'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('with value', () => (
    <Input value={'Search for ...'} />
  ))
  .add('disabled', () => (
    <Input disabled />
  ))
  .add('type checkbox', () => (
    <Input type="checkbox" />
  ))
  .add('type radio', () => (
    <Input type="radio" />
  ))