import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "../../../redux/weather";
import dayjs from 'dayjs'

import { colors, space, text } from "../../../styles/theme";
import Padding from "../../atoms/padding";
import Text from "../../atoms/text/text";
import InnerContainer from "../../atoms/innerContainer";
import TemperaturePanel from "../../molecules/temperaturePanel";
import WeatherIcons from "../../molecules/weatherIcons";


export default function RightPanel() {
    
    const country = useSelector((state) => state.weather.country);
    const city = useSelector((state) => state.weather.city);
    

    const date = dayjs().format('D MMM');
    console.log(date);

    return (
        <Main>
            <InnerContainer>                
                <Text className="sui-24" color={colors.blackChoc}>
                    {city}, 
                </Text>
                <Text className="sui-18" color={colors.blackChoc}>
                    {country} 
                </Text>  
                <Text color={colors.grey}>
                    {date} 
                </Text>                
                <TemperaturePanel />
                <WeatherIcons /> 
                                                        
            </InnerContainer>

        </Main>
    )

}

const Main = styled.div`
    width: 30%;
`