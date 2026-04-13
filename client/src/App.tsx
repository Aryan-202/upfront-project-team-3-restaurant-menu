function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar container">
        <h2>Unicuisine</h2>
        <div>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <button className="book-btn">(808) 555-0111</button>
      </nav>

      {/* Hero */}
      <section className="hero container">
        <h1>Dive Into Delicious Meal Dishes</h1>

        <div className="hero-images">
          <img src="https://source.unsplash.com/200x200/?food" />
          <img src="https://source.unsplash.com/200x200/?pizza" />
          <img src="https://source.unsplash.com/200x200/?noodles" />
          <img src="https://source.unsplash.com/200x200/?salad" />
        </div>
      </section>

      {/* Menu */}
      <section className="container">
        <h2>Breakfast Special Menu</h2>

        <div className="menu">
          <div className="menu-item">
            <div className="menu-left">
              <img src="https://source.unsplash.com/100x100/?burger" />
              <div className="menu-text">
                <h4>Crispy Chicken Poblano</h4>
                <p>Beef, chicken, turkey</p>
              </div>
            </div>
            <span>$120</span>
          </div>
        </div>

        <button className="book-btn">Book a Table</button>
      </section>
    </>
  )
}

export default App