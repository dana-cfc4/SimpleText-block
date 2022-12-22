const COLORS = [
  { name: 'black', label: 'Black' },
  { name: 'red', label: 'Red' },
  { name: 'yellow', label: 'Yellow' },
  { name: 'green', label: 'Green' },
  { name: 'purple', label: 'Purple' },
];

export default {
  title: 'Simple Text Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'colorChoices', 'formattingOptions'],
    },
  ],
  properties: {
    text: {
      title: 'Text block',
      description: 'The text of this block',
    },
    colorChoices: {
      title: 'Text color',
      widget: 'color_picker',
      colors: COLORS,
      default: 'black',
    },
    formattingOptions: {
      title: 'Format',
      description: 'Choose a format',
      choices: [
        ['capitalize', 'Title Case'],
        ['uppercase', 'UPPERCASE'],
        ['lowercase', 'lowercase'],
      ],
    },
  },

  required: [],
};
