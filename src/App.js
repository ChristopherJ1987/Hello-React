import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" class="App-logo" alt="logo"></img>
        <ul className='nav-items'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
function Body() {
  return (
    <body className='body'>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>He has well over 100K stars on GitHub</li>
        <li>React is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <h1>Reasons I'm excited to learn React</h1>
      <ul>
        <li>It's a popular library</li>
        <li>I can easily level up my coding skills</li>
        <li>I'll be more likely to get a job as a developer</li>
        <li>React applications are fast and reliable</li>
      </ul>
    </body>
  )
}

function Footer() {
  return (
    <footer className='footer'>©2023 ChristopherJ Development. All rights reserved</footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}


export default App;