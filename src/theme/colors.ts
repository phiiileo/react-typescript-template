const black = '#08080A';
const dark = '#1D1D1D';
const light = '#F2F2F2';
const white = '#ffffff';

const colors = {
  'almost-black-three': '#0a0a0b',
  'almost-black-two': '#0d0e11',
  'black-five': '#3b3b3b',
  'black-nine': '#333333',
  'black-seven': '#383838',
  'black-six': '#141313',
  'black-three': '#1d1d1d',
  'black-two': '#121212',
  background: black,
  black,
  dark: '#121316',
  ebony: '#08080a',
  error: 'rgb(200, 0, 0)',
  grape: '#431c31',
  primary: '#D65A31',
  secondary: '#222831',
  accent: `#BDBDBD`,
  transparent: 'transparent',
  whiteOne: '#fff',
  buttonYellowGradient: 'linear-gradient(270.02deg, #FDB913 0.02%, #F2994A 99.98%)',
  white,
  green: '#3CA455',
  label: '#4F4F4F',
  'primary.light': '#FFF4EE',
  'grey.one': '#BDBDBD',
  'grey-one': '#BDBDBD', // to be depricated
  'light.grey': '#E5E5E5',
  'light-grey': '#E5E5E5', // to be depricated
};

export const darkColors = {
  ...colors,
  footer: colors['black'],
  sidebar: '#272729',
  icon: '#818181',
  input: colors['black-three'],
  inputText: white,
  metadataBg: colors['black-two'],
  modal: 'rgb(33, 33, 33)',
  progressBar: colors['black-nine'],
  switchingBg: black,
  sidebarText: colors['whiteOne'],
  switchingText: white,
  tileBg: colors.dark,
  editProfile: colors.ebony,
};

export const lightColors = {
  ...colors,
  footer: '#f9f9f9',
  sidebar: '#f9f9f9',
  icon: '#000000',
  input: colors['grey-one'],
  inputText: black,
  metadataBg: colors.white,
  modal: colors.white,
  progressBar: '#C0C0C0',
  searchbar: colors.white,
  switchingBg: light,
  sidebarBg: light,
  switchingText: dark,
  tileBg: colors.white,
  headerBg: colors.secondary,
};
