import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withNotes } from '@storybook/addon-notes';

import MyButton from './Button.vue';

import someMarkdownText from './someMarkdownText.md';

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    templete: "<MyButton>Hello Button</MyButton>"
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: "<span><MyButton/>😀 😎 👍 💯</span>"
  }))
  .add('With Markdown', withNotes(someMarkdownText)(() => ({
    components: { MyButton },
    template: "<span><MyButton/>😀 😎 👍 💯</span>"
  })))
