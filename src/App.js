import './App.css';
import ExampleCharts from './components/ExCharts/ExCharts';

function App() {
  return (
    <>
      <div className="container mt-md-5 mt-sm-4 border w-50 rounded menu-bg ">
        <header className="d-flex p-md-3 p-sm-2 menu-bg justify-content-center gap-5 flex-md-row flex-sm-column align-items-sm-center">
          <a href="#" className="text-decoration-none menu-bg text-black  ">
            Anasayfa
          </a>
          <a href="#" className="text-decoration-none menu-bg text-black ">
            Elektrik
          </a>
          <a href="#" className="text-decoration-none menu-bg text-black ">
            Su
          </a>
          <a href="#" className="text-decoration-none menu-bg text-black ">
            Gaz
          </a>
          {/* <div className="col-md-3  p-md-3 text-center  menu-bg">
          </div>
          <div className="col-md-3  p-md-3 text-center  menu-bg">
          </div>
          <div className="col-md-3  p-md-3 text-center  menu-bg">
          </div>
          <div className="col-md-3  p-md-3 text-center menu-bg ">
          </div> */}
        </header>
      </div>
      <div className="container w-50 mb-3">
        <div className="row">
          <div className="col g-2 ">
            <main className="container mt-md-4 mt-sm-2 border menu-bg ">
              <div className="row div-bg p-md-2 ">
                <div className="menu-bg w-75 mx-md-auto mx-sm-auto mb-3 p-2 text-black text-center mt-sm-2">
                  add new bill
                </div>
              </div>
              <div className="row div-bg p-md-2  justify-content-center">
                <div className="menu-bg w-75 p-2 text-black">
                  <ExampleCharts />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
