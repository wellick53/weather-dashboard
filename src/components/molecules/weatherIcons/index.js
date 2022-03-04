import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faCloudRain } from '@fortawesome/free-solid-svg-icons'


import InnerContainer from '../../atoms/innerContainer';
import Flex from '../../atoms/flex';
import styled from 'styled-components';


function WeatherIcons() {

     

    return (
        <div>
             <InnerContainer>
                 <Flex center>
                     <Icon>
                        <FontAwesomeIcon icon={faWind} />
                     </Icon>
                     <Icon>
                        <FontAwesomeIcon icon={faDroplet} />
                     </Icon>
                     <Icon>
                        <FontAwesomeIcon icon={faCloudRain} />
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