import styled, { css } from 'styled-components';

const Padding = styled.div`
    ${({ top }) => top && css`
        padding-top: ${top};
    `}

    ${({ bottom }) => bottom && css`
        padding-bottom: ${bottom};
    `}
`;

export default Padding;