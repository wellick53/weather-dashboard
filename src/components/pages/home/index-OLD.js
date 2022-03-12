import React, { useEffect, useState } from "react";
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
    const weatherIcons = [];
    const description = [];

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
            res.data.weather.map(item => weatherIcons.push(item.icon))
            res.data.weather.map(item => description.push(item.description))
            console.log(res.data.main.humidity);
            dispatch(updateData({ temperature: res.data.main.temp,
                                    city: res.data.name, 
                                    country: res.data.sys.country,
                                    icons: weatherIcons,
                                    description: description,
                                    windSpeed: res.data.wind.speed,
                                    humidity: res.data.main.humidity,
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
    height: 100vh;
    //width: 100vw;
    background-color: ${colors.juneBud};
    border-radius: 30px;

`