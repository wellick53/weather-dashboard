import styled, { css } from "styled-components"



const Flex = styled.div`

    display: flex;

    ${({centerMain}) => centerMain && css`        
        justify-content: center;
    `}

    ${({centerCross}) => centerCross && css`        
        align-items: center;
    `}

    ${({row}) => row && css`        
        flex-direction: row;
    `}

    ${({column}) => column && css`        
        flex-direction: column;
    `}
`;

export default Flex;