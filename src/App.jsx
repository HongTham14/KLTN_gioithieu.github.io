import "./App.css";
import styled from "styled-components";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import Home from "./planet/home";
import NotFound from "./components/notfound/NotfoundPage";
import { Mercurypage}  from "./components/pages/mercutyPage";
import { Venuspage}  from "./components/pages/venusPage";
import { Earthpage}  from "./components/pages/earthPage";
import { Marspage}  from "./components/pages/marsPage";
import { Jupiterpage}  from "./components/pages/jupiterPage";
import ScrollToTop from "./components/scrollTotop/ScrollToTop";
import Navbar from "./components/navbar/Navbar.jsx";
import Earth from "./planet/earth";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  
`;

function App() {
  return (
    <CanvasContainer>
       <Router>
        
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/mercurypage' component={Mercurypage} /> 
          <Route path='/venuspage' component={Venuspage} />
          <Route path='/earthpage' component={Earthpage} /> 
          <Route path='/marspage' component={Marspage} />
          <Route path='/jupiterpage' component={Jupiterpage} />
          {/* <Route path="*" component={NotFound} />  */}
        </Switch>
       
        
      </Router>
    </CanvasContainer>
  );

}

export default App;
