import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faBinoculars } from '@fortawesome/free-solid-svg-icons'


import InnerContainer from '../../atoms/innerContainer';
import Flex from '../../atoms/flex';
import styled from 'styled-components';
import Text from '../../atoms/text/text';

function WeatherIcons() { 
    
    const windSpeed = useSelector(state => state.weather.windSpeed).toFixed();
    const humidity = useSelector(state => state.weather.humidity);
    const visibility = useSelector(state => state.weather.visibility);
    console.log(visibility);
    

    return (
        <div>
             <InnerContainer>
                 <Flex center>
                     <Icon>
                        <FontAwesomeIcon icon={faWind} />
                        <Text>
                            {windSpeed+"km/h"}
                        </Text>
                     </Icon>
                     <Icon>
                        <FontAwesomeIcon icon={faDroplet} />
                        {humidity}% 
                     </Icon>
                     <Icon>
                        <FontAwesomeIcon icon={faBinoculars} />
                        {(visibility/1000)+"km"}
                     </Icon>                    
                 </Flex>
                 
                                 
            </InnerContainer>           
        </div>
        
    )
}

export default WeatherIcons;

const Icon = styled.span`
    flex-basis: 33.33%;
    display: flex;
    justify-content: center;
`