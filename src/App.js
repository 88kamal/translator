import './App.css';
import Aside from './Aside';
import Header from './component/Header';


// import Notes from './component/Notes';
import Translator from './component/Translator';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
 <Translator/>
 {/* <Notes/> */}
 {/* <SideBar/> */}
 {/* <Header/> */}
 {/* <Aside/> */}
    </div>

  );
}

export default App;



// import "./App.css";
// import SideBar from "./component/SideBar";
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import { AboutUs, OurAim, OurVision } from "./component/AboutUs";
// import {
// Services,
// ServicesOne,
// ServicesTwo,
// ServicesThree,
// } from "./component/Services";
// import { Events, EventsOne, EventsTwo } from "./component/Events";
// import Contact from "./component/ContactUs";
// // import Support from "./component/Support";
// function App() {
// return (
// 	<Router>
// 	<SideBar />
// 	<h1 className=" text-center my-4 text-4xl font-bold">Welcome To College GuruJee.com</h1>
// 		<Routes path="/about-us" exact component={AboutUs} />
// 		<Routes path="/about-us/aim" exact component={OurAim} />
// 		<Routes path="/about-us/vision" exact component={OurVision} />
// 		<Routes path="/services" exact component={Services} />
// 		<Routes path="/services/services1" exact component={ServicesOne} />
// 		<Routes path="/services/services2" exact component={ServicesTwo} />
// 		<Routes path="/services/services3" exact component={ServicesThree} />
// 		<Routes path="/contact" exact component={Contact} />
// 		<Routes path="/events" exact component={Events} />
// 		<Routes path="/events/events1" exact component={EventsOne} />
// 		<Routes path="/events/events2" exact component={EventsTwo} />
// 		{/* <Route path="/support" exact component={Support} /> */}
	
// 	</Router>
// );
// }

// export default App;
