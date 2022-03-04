import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "../../../redux/weather";

import Padding from "../../atoms/padding";
import { colors } from "../../../styles/theme";



export default function CenterPanel() {    

return (
    <Main>
        <Padding top="1rem">
            teste
        </Padding>        
    </Main>
)

}

const Main = styled.div`
    width: 50%;
    background-color: ${colors.paleSpringBud};
    border-radius: 50px;
`