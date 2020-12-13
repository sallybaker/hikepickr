import React from 'react';
import ReactDOM from 'react-dom';

function Container() {
  return (
    <>
     <Header />
     <Main />
     <Footer />
    </>
  );
}
ReactDOM.render(<Container />, document.getElementById('container'));

function Header() {
  return (
    <header>
      <a href="../" ><h1>Hike Pickr</h1></a>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <span id="copyright">&copy; 2020 Sally Baker</span>
    </footer>
  );
}

function Main() {
  return (
    <main>
      <content>
        <Banner />
        <Pickr />
      </content>
    </main>
  );
}

function Banner() {
  return (
    <banner>
      <h1 class="action">Choose Your Next Adventure...</h1>
    </banner>
  );
}

function Pickr() {
  return (
    <pickr>
      <form>
        <label for="dropdown" id="dropdown-label" class="question">How much time do you have?</label>
        <TimeDropdown />
        <HikeOptions />
      </form>
    </pickr>
  );
}
   
function TimeDropdown() {
  return (
    <div id="timedropdown">
      <select id="dropdown">
        <option value="">--- select an option ---</option>
        <option value="short">Short hikes (Less than 1 hr) </option>
        <option value="half day">Half day hikes (2-4 hours)</option>
        <option value="full day">Full day hikes (Over 4 hours) </option>
        <option value="multiday">Multi-day hikes</option>
      </select>
    </div>
  );
}

function HikeOptions() {
  return (
    <div id="hikeoptions">
    <label class="question">What do you want to see?</label><br />
      <label>
        <input type="checkbox" name="features" value="waterfalls" />Waterfalls
      </label><br />
      <label>
        <input type="checkbox" name="features" value="lookout" />Views for miles
      </label><br />
      <label> 
        <input type="checkbox" name="features" value="swimming" />Swimming
      </label><br />
      <label>
        <input type="checkbox" name="features" value="caves" />Caves
      </label><br />
      <label>
        <input type="checkbox" name="features" value="scrambling" />Scrambling
      </label><br />
      <label>
        <input type="checkbox" name="features" value="navskills"/ >Navigation skills
      </label><br />
      <label>
        <input type="checkbox" name="features" value="historical" />Historical
      </label><br />
      <label>
        <input type="checkbox" name="features" value="rainforest" />Rainforest
      </label><br />
          <label>
        <input type="checkbox" name="features" value="coastal" />Coastal
      </label><br />
    </div>
  );
}

/*
        
      <button type="submit" id="submit">Search</button>
*/