function Searchbar() {
  return (
    <section className="searchbar">
      <div className="searchbox">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search the cakes"
        />

        <div className="searchbox-result">
          <ul role="list">
            <li>
              <a href="#" title="">
                Taj Mahal Cake
              </a>
            </li>
          </ul>
        </div>
      </div>
      <input type="submit" value="Search" />
    </section>
  );
}

export default Searchbar;
