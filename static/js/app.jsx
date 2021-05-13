function App() {
  return(
    <React.Fragment>
      <Header />
      {/* App is now responsible for rendering the header! */}
      <h1>Hello World 🌍</h1>
      {/* this is like our main */}
      <Main />
      <Footer />
      {/* App is now responsible for rendering the footer! */}
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'));