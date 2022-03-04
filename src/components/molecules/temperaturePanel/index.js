import React from 'react';
import { useSelector } from 'react-redux';

import InnerContainer from '../../atoms/innerContainer';
import { text, space, colors } from '../../../styles/theme';
import Text from '../../atoms/text/text';
import Flex from '../../atoms/flex';


const TemperaturePanel = () => {

    const temperature = useSelector((state) => state.weather.temperature);
    const icons = useSelector((state) => state.weather.icons);
    const description = useSelector((state) => state.weather.description);
    console.log(icons);

    return (
        <InnerContainer>
            <Flex centerMain>
                <Text className="sui-32" color={colors.blackChoc}>
                    Today
                </Text>                
            </Flex>
            <Flex centerMain>
                {icons.map( (item, index) => {
                    let temp = `http://openweathermap.org/img/wn/${item}.png`;
                    let desc = description[index]                                            
                    return <img src={temp} title={desc} alt={desc}></img>
                })}            

                <Text className="sui-32" color={colors.blackChoc}>
                    {temperature.toFixed(1)}
                </Text>

                <Text className="sui-18" color={colors.grey}>
                    ºC
                </Text>
            </Flex>
        </InnerContainer>          
    )
}

export default TemperaturePanel