import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "../../../redux/weather";


export default function LeftPanel() {

    const temperature = useSelector((state) => state.weather.temperature);

return (
    <Main>
        teste
    </Main>
)

}

const Main = styled.div`
    width: 20%;
`