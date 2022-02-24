import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${({ xl }) => xl && css`
    width: ${theme.container.xl};

    @media screen and (max-width: 1680px) {
      width: calc(100% - 160px);
    }
  `}

  ${({ lg }) => lg && css`
    width: ${theme.container.lg};

    @media screen and (max-width: 1280px) {
      width: calc(100% - 160px);
    }
  `}

  ${({ md }) => md && css`
    width: ${theme.container.md};

    @media screen and (max-width: 1024px) {
      width: calc(100% - 160px);
    }
  `}

  ${({ sm }) => sm && css`
    width: ${theme.container.sm};
  `}

  @media screen and (max-width: 768px) {
    width: calc(100% - 128px);
  }
  @media screen and (max-width: 578px) {
    width: calc(100% - 64px);
  }
  @media screen and (max-width: 424px) {
    width: calc(100% - 48px);
  }
`;

export default Container