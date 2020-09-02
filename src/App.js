import React,{Component} from 'react';
import './App.css';
import dohvatiPodatke from './dohvatiPodatke';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import logo from './logo.png';
import GorivoPrikaz from "./GorivoPrikaz";


class App extends Component {
  constructor(){
    super();
    this.state={podaci:"",error:false};
  }
  render () {
    return(
      <div className="stranica d-flex flex-column">
      <div className="d-flex flex-column content bg-white">
          <nav className="navbar navbar-light bg-primary d-flex justify-content-center">
            <div className="text-center">
              
               <img className="ikona p-0" alt="cijene goriva" src={logo} />
            </div>
             
          </nav>
      {this.state.podaci && !this.state.error ? 
      <div>
      <GorivoPrikaz podaci={this.state.podaci}/>
      </div>
      : 
        this.state.error ? 
        <div className="text-center pt-4 my-auto">
        <h3 className="text-white pt-4">Pogreška kod dohvaćanja podataka</h3>
        </div>
        :
      <div className="text-center pt-4 my-auto">
      <Loader type="Oval" color="#007bff" height={100} width={100}/>
      <h3 className="text-primary pt-4">Dohvaćanje podataka...</h3>
      </div>
    
      }
    </div>
          <footer className="footer bg-primary p-3">
              <div className="text-center">
                <span className="text-light">cijeneGoriva</span>
              </div>
          </footer>
          
    </div>
    )

}
componentDidMount() {
dohvatiPodatke().then(podaci => {
  console.log(podaci);
  this.setState({podaci:podaci})
}).catch(error=>(this.setState({error:true})))
}
}
export default App;
