import styled, { css } from 'styled-components';

const Padding = styled.div`
    ${({ top }) => top && css`
        padding-top: ${top};
    `}

    ${({ right }) => right && css`
        padding-right: ${right};
    `}

    ${({ bottom }) => bottom && css`
        padding-bottom: ${bottom};
    `}

    ${({ left }) => left && css`
        padding-left: ${left};
    `}


`;

export default Padding;