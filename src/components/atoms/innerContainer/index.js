import React from 'react'

import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

import Padding from '../padding';

const InnerContainer = ( { children }) => {
    
    return (
        <Padding top="3rem" right="2rem" bottom="3rem" left="2rem">
            { children }
        </Padding>
    )   
}
    
export default InnerContainer