import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "../../../redux/weather";
import styled from "styled-components";
import { colors } from "../../../styles/theme";

import RightPanel from "../rightPanel"
import LeftPanel from "../leftPanel";
import CenterPanel from "../centerPanel";
import Container from "../../atoms/container";

const axios = require('axios');

export default function Home() {

    const dispatch = useDispatch();

    function getWeatherData(lat, lon) {
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lon,
            units: 'metric',
            appid: '82153655fb93771feb3ca6235649a3a0'
        }
    })
        .then((res) => {
            console.log(res);
            dispatch(updateData({ temperature: res.data.main.temp,
                                    city: res.data.name, 
                                    country: res.data.sys.country
                                }));
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    function getPosition(options) {
        return new Promise(function (resolve, reject) {
            return navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    useEffect(() => {             

        getPosition()
            .then((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                getWeatherData(lat, lon);
            })
            .catch((err) => {
                console.error(err.message);
            });       
    }, []);

    return (
        <Container xl>
            <Dashboard>
                <LeftPanel />
                <CenterPanel />
                <RightPanel />
            </Dashboard>            
        </Container>
    )
}

const Dashboard = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-bottom: 5vh;
    height: 90vh;
    background-color: ${colors.juneBud};
    border-radius: 30px;

`