import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "../../../redux/weather";

import Text from "../../atoms/text/text";
import Padding from "../../atoms/padding";


export default function RightPanel() {

    const temperature = useSelector((state) => state.weather.temperature);
    const country = useSelector((state) => state.weather.country);
    const city = useSelector((state) => state.weather.city);

return (
    <Main>
        <Padding top="1rem">
            <Text>{city}, </Text> {country}
        </Padding>        
    </Main>
)

}

const Main = styled.div`
    width: 30%;
`