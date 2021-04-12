import './App.css';
import SearchBooks from './pages/SearchBooks';

class App extends Component { 
  render () {
    return(
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/search" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
