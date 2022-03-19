 import React, {Component} from "react";
 import { BrowserRouter,Routes,Route} from "react-router-dom";
 import { Provider } from "react-redux";
 import './App.css';
import store from "./store"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Men from "./components/Men";
import Kids from "./components/Kids";
import Cart from "./components/Cart";
import Details_women from "./components/Details_women"
import Details_men from "./components/Details_men"
import Details_kids from "./components/Details_kids";
// import Details from "./components/Details";
function App(){
     return (
        <Provider store={store}>
     
              
         <BrowserRouter>
         <Navbar/>
        
         <Routes>
       
<Route exact path="/" element ={<Home/>}/>
<Route exact path="/women" element ={<Home/>}/>
<Route exact path="/men" element ={<Men/>}/>
<Route exact path="/kids" element ={<Kids/>}/>
 <Route  path="/cart" exact element={<Cart/>}/>
 <Route path='/details_women/:id'  exact element ={<Details_women/>}/>
 <Route path='/details_men/:id' exact element ={<Details_men/>}/>
 <Route path='/details_kids/:id' exact element ={<Details_kids/>}/>
 {/* <Route  path="/details" exact component={Details}/> */}
         </Routes>
       
         </BrowserRouter>
         </Provider>
        
     )
     }
// import Button from './components/Button';
// import  "./css/style.css";
// class App extends Component{
//   constructor(props){
//   super(props)

// this.state= {
//   current:"0",
//   previous:[],
//   nextIsReset:false
// }
// }
// reset= () =>{
//   this.setState({current:"0",previous:[],nextIsReset:false})
// }
//   addToCurrent=(symbol) =>{

//     console.log(symbol)
//     if(["/","-","+","*"].indexOf(symbol)>-1){
//       let{previous}=this.state;
//       previous.push(this.state.current+symbol);
//       this.setState({previous,nextIsReset:true});
//     }
//     else{
//       if((this.state.current ==="0" && symbol !==".") || this.state.nextIsReset){
//       this.setState({current:symbol,nextIsReset:false});
//     }
//     else{
//       this.setState({current:this.state.current+symbol})
//     }
//     }
//   }
//   solve=(symbol)=>{

//     let{current,previous,nextIsReset}=this.state;
//     if(previous.length>0){
//       current=eval(String(previous[previous.length-1] + current));
//       this.setState({current,previous:[],nextIsReset:true});
//     }
//   }
// render() {
//   const button=[
// {symbol:"C",cols:3,action:this.reset},
// {symbol:"/",cols:1,action:this.addToCurrent},
// {symbol:"7",cols:1,action:this.addToCurrent},
// {symbol:"8",cols:1,action:this.addToCurrent},
// {symbol:"9",cols:1,action:this.addToCurrent},
// {symbol:"*",cols:1,action:this.addToCurrent},
// {symbol:"4",cols:1,action:this.addToCurrent},
// {symbol:"5",cols:1,action:this.addToCurrent},
// {symbol:"6",cols:1,action:this.addToCurrent},
// {symbol:"-",cols:1,action:this.addToCurrent},
// {symbol:"1",cols:1,action:this.addToCurrent},
// {symbol:"2",cols:1,action:this.addToCurrent},
// {symbol:"3",cols:1,action:this.addToCurrent},
// {symbol:"+",cols:1,action:this.addToCurrent},
// {symbol:"0",cols:2,action:this.addToCurrent},
// {symbol:".",cols:1,action:this.addToCurrent},
// {symbol:"=",cols:1,action:this.solve},
//   ]
  
//   return (
//     <div className="App">
//       {this.state.previous.length > 0 ? 
//       <div className="floaty-last">{this.state.previous[this.state.previous.length-1]}</div>
//     : null
//      }
//       <input className="result" type="text" defaultValue={this.state.current}></input>
//       {button.map((btn,i)=> {
//         return <Button key={i} symbol = {btn.symbol} cols={btn.cols} action={(symbol)=>btn.action(symbol)}/>
//       })}
//     </div>
//   );
// }
// }
 export default App;
// class App extends React.Component{
  
// }