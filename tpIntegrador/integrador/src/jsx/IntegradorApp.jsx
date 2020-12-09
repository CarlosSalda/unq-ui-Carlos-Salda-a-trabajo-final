import React, { Component, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Start from './Start';


const IntegradorApp = () => {

    const seeRules = () => {


        let rules = document.getElementById("rulesAndInfo")
        let rules22 = document.getElementById("rulesAndInfo2")
        let rules33 = document.getElementById("rulesAndInfo3")
        let photo = document.getElementById("rulesPhoto")

        if (!rules.hidden) {
            rules.hidden = true
            rules22.hidden = true
            rules33.hidden = true
            photo.hidden = true

        } else {
            rules.hidden = false
            rules22.hidden = false
            rules33.hidden = false
            photo.hidden = false
        }


    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">IntegradorApp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={seeRules}>Rules And Info </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="sheldon" href='https://www.youtube.com/watch?v=_7YWZAnB8hk&ab_channel=Demente117LL' target="_blank" >Reglas explicadas por sheldon ☺ </a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <Router>
                <Switch>
                    <Route path="/" component={Start} />
                </Switch>
            </Router>
        </>
    );
}

export default IntegradorApp
