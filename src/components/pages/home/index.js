import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData, updateCityCountry } from "../../../redux/weather";
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
        axios.get('http://api.openweathermap.org/data/2.5/onecall?', {
        params: {
            lat: lat,
            lon: lon,
            units: 'metric',
            appid: '3ea3a9f82043328777778a5be1dbd7d7'
        }
    })
        .then((res) => {
            console.log(res);
            res.data.current.weather.map(item => weatherIcons.push(item.icon))
            res.data.current.weather.map(item => description.push(item.description))
            
            dispatch(updateData({ temperature: res.data.current.temp,                                    
                                    icons: weatherIcons,
                                    description: description,
                                    windSpeed: res.data.current.wind_speed,
                                    humidity: res.data.current.humidity,
                                    visibility: res.data.current.visibility
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

    function getLocationName(lat, lon) {
        axios.get(
            `https://us1.locationiq.com/v1/reverse.php?key=pk.12c8d18c6c45693af152d0f52f2d1aa1&lat=${lat}&lon=${lon}&format=json`)
            .then((res) => {
                dispatch(updateCityCountry({
                    city: res.data.address.town,
                    country: res.data.address.country 
                }))
            })
    }

    useEffect(() => {             

        getPosition()
            .then((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log(lat, lon);
                getWeatherData(lat, lon);
                getLocationName(lat, lon);
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