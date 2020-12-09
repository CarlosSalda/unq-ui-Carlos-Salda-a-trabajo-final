
import React, { Component, useEffect, useState } from 'react';
import '../css/Start.css';
import lagartoPNG from '../images/Lagarto.png'
import tijeraPNG from '../images/Tijera.png'
import spockPNG from '../images/Spock.png'
import piedraPNG from '../images/Piedra.png'
import papelPNG from '../images/Papel.png'
import reglasPNG from '../images/reglasImagen.png'


const Start = () => {




    const [playerScore, setPlayerScore] = useState()
    const [pcScore, setPcScore] = useState()

    const [chooseUser, setChooseUser] = useState()
    const [pcDecission, setPcDecission] = useState()
    const [gane, setGane] = useState()

    const [lastPc, setLastPc] = useState()
    const [lastHuman, setLastHuman] = useState()

    const [tijera, setTijera] = useState()
    const [piedra, setPiedra] = useState()
    const [papel, setPapel] = useState()
    const [lagarto, setLagarto] = useState()
    const [spock, setSpock] = useState()




    useEffect(() => {
        //precargamos los valores para los scores 
        setPlayerScore(0)
        setPcScore(0)

        //seteamos los botones y la info de algunos que vamos a usar para algunas "funciones" y el resto del tp
        setChooseUser(document.getElementById("photoElection"))
        setPcDecission(document.getElementById("response"))
        setTijera(document.getElementById("Tijera"))
        setPiedra(document.getElementById("Piedra"))
        setPapel(document.getElementById("Papel"))
        setLagarto(document.getElementById("Lagarto"))
        setSpock(document.getElementById("Spock"))
    }, []);

    //se decide el ganar de la partida bajo cada condicion
    const decideWinner = (tarId, imgR) => {

        if ((tarId === imgR.value)) {
            console.log("entre")
            setGane("empate")
            console.log(gane)
        }

        //condiciones si usuario elige tijera
        if ((tarId === "Tijera" && imgR.value === "Piedra") || (tarId === "Tijera" && imgR.value === "Spock")) {
            setPcScore(pcScore + 1)
            setGane("false")
        }

        if ((tarId === "Tijera" && imgR.value === "Lagarto") || (tarId === "Tijera" && imgR.value === "Papel")) {
            setPlayerScore(playerScore + 1)
            setGane("true")
        }


        //condiciones si el usuario elige piedra
        if ((tarId === "Piedra" && imgR.value === "Papel") || (tarId === "Piedra" && imgR.value === "Spock")) {
            setPcScore(pcScore + 1)
            setGane("false")
        }

        if ((tarId === "Piedra" && imgR.value === "Lagarto") || (tarId === "Piedra" && imgR.value === "Tijera")) {
            setPlayerScore(playerScore + 1)
            setGane("true")
        }

        //condiciones si el usuario elige papel
        if ((tarId === "Papel" && imgR.value === "Tijera") || (tarId === "Papel" && imgR.value === "Lagarto")) {
            setPcScore(pcScore + 1)
            setGane("false")
        }

        if ((tarId === "Papel" && imgR.value === "Spock") || (tarId === "Papel" && imgR.value === "Piedra")) {
            setPlayerScore(playerScore + 1)
            setGane("true")
        }

        //condiciones si el usuario elige lagarto
        if ((tarId === "Lagarto" && imgR.value === "Piedra") || (tarId === "Lagarto" && imgR.value === "Tijera")) {
            setPcScore(pcScore + 1)
            setGane("false")
        }

        if ((tarId === "Lagarto" && imgR.value === "Spock") || (tarId === "Lagarto" && imgR.value === "Papel")) {
            setPlayerScore(playerScore + 1)
            setGane("true")
        }

        //condiciones si el usuario elige spock
        if ((tarId === "Spock" && imgR.value === "Lagarto") || (tarId === "Spock" && imgR.value === "Papel")) {
            setPcScore(pcScore + 1)
            setGane("false")
        }

        if ((tarId === "Spock" && imgR.value === "Tijera") || (tarId === "Spock" && imgR.value === "Piedra")) {
            setPlayerScore(playerScore + 1)
            setGane("true")
        }
    }


    //se setea la decision de la pc a traves del valor random, se hace que se muestra en la pagina la decision y se llama añ decideWinner()
    // en el cual elige el ganador
    const callDecideWinner = (imgR, random, target) => {

        const tarId = target.id

        if (random <= 20) {
            imgR.src = tijeraPNG
            imgR.hidden = false
            imgR.value = "Tijera"

            decideWinner(tarId, imgR)
        }

        if (random <= 40 && random > 20) {
            imgR.src = piedraPNG
            imgR.hidden = false
            imgR.value = "Piedra"

            decideWinner(tarId, imgR)
        }

        if (random <= 60 && random > 40) {
            imgR.src = papelPNG
            imgR.hidden = false
            imgR.value = "Papel"

            decideWinner(tarId, imgR)
        }

        if (random <= 80 && random > 60) {
            imgR.src = lagartoPNG
            imgR.hidden = false
            imgR.value = "Lagarto"

            decideWinner(tarId, imgR)
        }

        if (random <= 100 && random > 80) {
            imgR.src = spockPNG
            imgR.hidden = false
            imgR.value = "Spock"

            decideWinner(tarId, imgR)
        }
    }



    const callTijera = (target, random) => {

        //setea la imagen de mi eleccion
        let img = chooseUser
        //setea la imagen de eleccion de la Pc y la muestra
        let imgR = pcDecission
        img.src = tijeraPNG
        img.hidden = false

        //llama al handler de mi eleccion
        callDecideWinner(imgR, random, target)

        //bloquea el resto de botones para no llamar infinatamente
        piedra.disabled = true
        papel.disabled = true
        lagarto.disabled = true
        spock.disabled = true


        //se setea un timer con acciones para los botones que ya no esteen bloqueados, que setee la ultima decision de la pc y del jugador
        //que la eleccion del jguador se vuelva a esconder junto con la de la pc. Para poder seguir jugando.
        setTimeout(function () {
            img.hidden = true

            setLastPc(imgR.src)
            setLastHuman(img.src)

            piedra.disabled = false
            papel.disabled = false
            lagarto.disabled = false
            spock.disabled = false
            target.disabled = false
            imgR.hidden = true

        }, 3000);
    }

    const callPiedra = (target, random) => {

        //setea la imagen de mi eleccion
        let img = chooseUser
        //setea la imagen de eleccion de la Pc y la muestra
        let imgR = pcDecission
        img.src = piedraPNG
        img.hidden = false

        callDecideWinner(imgR, random, target)


        //bloquea el resto de botones para no llamar infinatamente
        tijera.disabled = true
        papel.disabled = true
        lagarto.disabled = true
        spock.disabled = true


        //se setea un timer con acciones para los botones que ya no esteen bloqueados, que setee la ultima decision de la pc y del jugador
        //que la eleccion del jguador se vuelva a esconder junto con la de la pc. Para poder seguir jugando.
        setTimeout(function () {
            img.hidden = true

            setLastPc(imgR.src)
            setLastHuman(img.src)

            tijera.disabled = false
            papel.disabled = false
            lagarto.disabled = false
            spock.disabled = false
            target.disabled = false
            imgR.hidden = true
        }, 3000);
    }

    const callPapel = (target, random) => {

        //setea la imagen de mi eleccion
        let img = chooseUser
        //setea la imagen de eleccion de la Pc y la muestra
        let imgR = pcDecission
        img.src = papelPNG
        img.hidden = false

        callDecideWinner(imgR, random, target)

        //bloquea el resto de botones para no llamar infinatamente
        piedra.disabled = true
        tijera.disabled = true
        lagarto.disabled = true
        spock.disabled = true

        //se setea un timer con acciones para los botones que ya no esteen bloqueados, que setee la ultima decision de la pc y del jugador
        //que la eleccion del jguador se vuelva a esconder junto con la de la pc. Para poder seguir jugando.
        setTimeout(function () {
            img.hidden = true

            setLastPc(imgR.src)
            setLastHuman(img.src)

            piedra.disabled = false
            tijera.disabled = false
            lagarto.disabled = false
            spock.disabled = false
            target.disabled = false
            imgR.hidden = true

        }, 3000);
    }




    const callLagarto = (target, random) => {

        //setea la imagen de mi eleccion
        let img = chooseUser
        //setea la imagen de eleccion de la Pc y la muestra
        let imgR = pcDecission
        img.src = lagartoPNG
        img.hidden = false

        callDecideWinner(imgR, random, target)

        //bloquea el resto de botones para no llamar infinatamente
        piedra.disabled = true
        papel.disabled = true
        tijera.disabled = true
        spock.disabled = true


        //se setea un timer con acciones para los botones que ya no esteen bloqueados, que setee la ultima decision de la pc y del jugador
        //que la eleccion del jguador se vuelva a esconder junto con la de la pc. Para poder seguir jugando.
        setTimeout(function () {
            img.hidden = true

            setLastPc(imgR.src)
            setLastHuman(img.src)

            piedra.disabled = false
            papel.disabled = false
            tijera.disabled = false
            spock.disabled = false
            target.disabled = false
            imgR.hidden = true

        }, 3000);
    }

    const callSpock = (target, random) => {

        //setea la imagen de mi eleccion
        let img = chooseUser
        //setea la imagen de eleccion de la Pc y la muestra
        let imgR = pcDecission
        img.src = spockPNG
        img.hidden = false

        callDecideWinner(imgR, random, target)

        //bloquea el resto de botones para no llamar infinatamente
        piedra.disabled = true
        papel.disabled = true
        lagarto.disabled = true
        tijera.disabled = true


        //se setea un timer con acciones para los botones que ya no esteen bloqueados, que setee la ultima decision de la pc y del jugador
        //que la eleccion del jguador se vuelva a esconder junto con la de la pc. Para poder seguir jugando.
        setTimeout(function () {
            img.hidden = true

            setLastPc(imgR.src)
            setLastHuman(img.src)

            piedra.disabled = false
            papel.disabled = false
            lagarto.disabled = false
            tijera.disabled = false
            target.disabled = false
            imgR.hidden = true

        }, 3000);
    }



    //Handler de la eleccion del usuario
    const callOption = async (event) => {


        //guarda en una variable el valor de textContent del event(seria la eleccion del jugador)
        let val = event.target.textContent
        let buton = event.target

        //esconde la data de endGame()

        buton.disabled = true //poner disable el boton para no hacer elecciones de manera infinita

        hideRules() //esconde las reglas por si se estan mostrando

        const random = Math.floor((Math.random() * 100) + 1) //crea el numero random para definir despues cual va a ser la "deciision de la pc"

        //podria haberse hecho esto de manera distinta, ejemplo haciendo que cada boton llame a su propio Handler. Y no estar haciendo de la info de un textContent. No me parecio que en ESTE caso me sume.
        if (val === "Tijera") {
            await callTijera(buton, random)
        }

        if (val === "Piedra") {
            await callPiedra(buton, random)
        }

        if (val === "Papel") {
            await callPapel(buton, random)
        }

        if (val === "Lagarto") {
            await callLagarto(buton, random)
        }


        if (val === "Spock") {
            await callSpock(buton, random)
        }
    }

    //esconde/muestra las reglas explicaticas junto con la imagen que se acceden a traves del navbar 
    const hideRules = () => {
        let rules = document.getElementById("rulesAndInfo")
        let rules2 = document.getElementById("rulesAndInfo2")
        let rules3 = document.getElementById("rulesAndInfo3")
        let photo = document.getElementById("rulesPhoto")

        rules.hidden = true
        rules2.hidden = true
        rules3.hidden = true
        photo.hidden = true
    }


    //Decision de cuando "se termina la partida", basicamente es para que decida que accion realizar. Despues de decidir quien gana
    const endGame = () => {
        return pcScore >= 1 || playerScore >= 1
    }


    //seteo la ultima decision de la pc
    const pcElection = () => {

        if (lastPc) {
            return (<img id="last2" src={lastPc} width="40" height="50"></img>)
        }
    }

    //seteo la ultima decision del jugador
    const humanElection = () => {

        if (lastHuman) {
            return (<img id="last2" src={lastHuman} width="40" height="50"></img>)
        }
    }


    return (<>
        {/*Muestra la ultima eleccion de la pc y del jugador (como en el trabajo solo decia de cada partida,es decir de cada "eleccion" solo muestro el ultimo valor)*/}
        <div id="last">
            <div>ultima eleccion PC: {pcElection()}</div>
            <div>  tu ultima eleccion : {humanElection()}</div>
        </div>

        {/*Botones con el cual elegimos nuestra decision.*/}
        <div id="divBotones">
            <button type="button" class="btn btn-outline-primary" id="Tijera" onClick={callOption}>Tijera</button>
            <button type="button" class="btn btn-outline-secondary" id="Piedra" onClick={callOption}>Piedra</button>
            <button type="button" class="btn btn-outline-success" id="Papel" onClick={callOption}>Papel</button>
            <button type="button" class="btn btn-outline-danger" id="Lagarto" onClick={callOption}>Lagarto</button>
            <button type="button" class="btn btn-outline-warning" id="Spock" onClick={callOption}>Spock</button>
        </div>

        {/*Score de puntuacion actual del juego.*/}
        <div id="score">
            TU: {playerScore} -- PC: {pcScore}
        </div>

        {/*imagenes la cuales son luego cargadas con el source para cada decision correspondiente. */}
        <img hidden id="photoElection" src="" width="200" height="300"></img>
        <img hidden id="response" src="" width="200" height="300"></img>

        {/*Reglas del juego junto con informacion y una imagen explicativa. */}
        <div id="infoRules" >
            <p id="rulesAndInfo" hidden>Bienvenidos a Tijera, Piedra, Papel, Lagarto, Spock. Es similar a un piedra, papel, tijera tradicional pero con algunas distinciones: </p>
            <p id="rulesAndInfo2" hidden>Tijera le gana a Papel y Lagarto. Papel le gana Piedra y a Spock. Piedra le gana a Lagarto y a Tijera </p>
            <p id="rulesAndInfo3" hidden> Lagarto le gana a Spock y  a Papel. Spock le gana a Tijera y a Piedra, les dejo una imagen explicativa: </p>
            <img hidden id="rulesPhoto" src={reglasPNG} width="500" height="600"></img>
        </div>

        <footer id = "end">by Carlos Saldaña</footer>
    </>
    );
}

export default Start;