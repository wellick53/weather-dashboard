import { rem } from 'polished';

export const colors = {
  blue: '#001489',
  yellow: '#FEDD00',
  white: '#FFFFFF',
  black: '#000000',
  black88: '#1F1F1F',
  black80: '#333333',
  black64: '#5C5C5C',
  black32: '#ADADAD',
  black16: '#D6D6D6',
  black12: '#E0E0E0',
  black8: '#EBEBEB',
  dark: '#101214'
}

export const container = {
  _xl: '1548px',
  _lg: '1352px',
  _md: '1160px'
}

export const space = {
  _360: rem('360px'),
  _224: rem('224px'),
  _192: rem('192px'),
  _160: rem('160px'),
  _112: rem('112px'),
  _96: rem('96px'),
  _88: rem('88px'),
  _80: rem('80px'),
  _72: rem('72px'),
  _64: rem('64px'),
  _56: rem('56px'),
  _48: rem('48px'),
  _40: rem('40px'),
  _32: rem('32px'),
  _24: rem('24px'),
  _16: rem('16px'),
  _8: rem('8px')
}

export const text = {
  _256: rem('256px'),
  _160: rem('160px'),
  _128: rem('128px'),
  _96: rem('96px'),
  _72: rem('72px'),
  _56: rem('56px'),
  _48: rem('48px'),
  _40: rem('40px'),
  _32: rem('32px'),
  _28: rem('28px'),
  _24: rem('24px'),
  _18: rem('18px'),
  _16: rem('16px'),
  _14: rem('14px'),
  _12: rem('12px')
}

const theme = {
  colors,
  container,
  space,
  text
}

export default theme;