import './App.css';
import React, { useContext } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthContextProvider } from "./Components/context/AuthContext";



import Dashboard from './Components/DashBoard/Dashboard';
import Sidebar from './Components/SideBar/sidebar';
import Navbar from './Components/Header/navbar';
import ReportDashboard from './Components/Reports/ReportDashboard';

import AddBusroute from './Components/Manage_Routes/AddBusroute';
import ViewBusroute from './Components/Manage_Routes/ViewBusroute'
import EditBusroute from './Components/Manage_Routes/EditBusroute';
import ReportBusroute from './Components/Reports/BusRouteReport';

import AddJourney from './Components/Manage_Journey/AddJourney';
import ViewJourney from './Components/Manage_Journey/ViewJourney';
import EditJourney from './Components/Manage_Journey/EditJourney';
import ReportJourney from './Components/Reports/JourneyReport';

import AddTimetable from './Components/Manage_Timetable/AddTimetable';
import ViewTimetable from './Components/Manage_Timetable/ViewTimetable';
import EditTimetable from './Components/Manage_Timetable/EditTimetable';


import AddBus from './Components/Manage_Bus/AddBus';
import ViewBus from './Components/Manage_Bus/ViewBus';
import ViewBusDetail from './Components/Manage_Bus/ViewBusDetail';
import EditBus from './Components/Manage_Bus/EditBus';
import ReportBus from './Components/Reports/BusReport';



import TimetableReport from './Components/Reports/TimetableReport';

import AddDriver from './Components/Manage_Drivers/Adddriver';
import EditDriver from './Components/Manage_Drivers/EditDriver';
import ViewDriver from './Components/Manage_Drivers/ViewDriver';


// import AuthContext from './Components/context/AuthContext'
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AuthContext from './Components/context/AuthContext';



axios.defaults.withCredentials = true;

function App() {

  // const { loggedIn } = useContext(AuthContext);
  return (


    <AuthContextProvider>
      <Router>
        <div>
          <Route path="/dashboard" component={Sidebar}  />
          <Route path="/dashboard" component={Navbar}/>

          <Route path="/dashboard" exact component={Dashboard} />


          <Route path="/dashboard/addBusroute" exact component={AddBusroute} />
          <Route path="/dashboard/viewBusroute" exact component={ViewBusroute} />
          <Route path="/dashboard/busrouteupdate/:id" exact component={EditBusroute} />
          <Route path="/dashboard/busroutereport" exact component={ReportBusroute} />

          <Route path="/dashboard/addJourney" exact component={AddJourney} />
          <Route path="/dashboard/viewJourney" exact component={ViewJourney} />
          <Route path="/dashboard/updateJourney/:id" exact component={EditJourney} />
          <Route path="/dashboard/journeyreport" exact component={ReportJourney} />

          <Route path="/dashboard/addTimetable" exact component={AddTimetable} />
          <Route path="/dashboard/viewTimetable" exact component={ViewTimetable} />
          <Route path="/dashboard/updateTimetable/:id" exact component={EditTimetable} />
          <Route path="/dashboard/timetablereport" exact component={TimetableReport} />

          <Route path="/dashboard/addDriver" exact component={AddDriver} />
          <Route path="/dashboard/viewDriver" exact component={ViewDriver} />
          <Route path="/dashboard/updateDriver/:id" exact component={EditDriver} />

          <Route path="/dashboard/addbus" exact component={AddBus} />
          <Route path="/dashboard/viewBus" exact component={ViewBus} />



          <Route path="/dashboard/reportdashboard" exact component={ReportDashboard} />







          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>



        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;
