import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import myphoto from './img/myphoto.jpg';
import myphotos from './img/chetan.jpg';
import myphotoss from './img/nikhil.png';
import myphotoraj from './img/raj.jpg';
import Profiless from './Profiless'; // Ensure the case matches the actual filename

function App() {
  return (
    <div className="App">
      <Profiless 
        image={myphoto} 
        altname="Profile Pic" 
        name="Ashutosh Olekar" 
        pro="Software Developer" 
        tile="Google" 
        mobile="9503322604"
        linkdin="https://www.linkedin.com/in/ashutosh-olekar-373360219/" 
        github="https://github.com/Ashuoles3707"
        facebook="https://www.facebook.com/ashutosh.olekar" 
      />
      <Profiless 
        image={myphotos} 
        altname="Profile Pic" 
        name="Chetan Chenkote" 
        pro="Software Developer" 
        tile="Microsoft" 
        mobile="1122334455"
      />
      <Profiless 
        image={myphotoss} 
        altname="Profile Pic" 
        name="Nikhil Kulte" 
        pro="Software Developer" 
        tile="Linkdin" 
        mobile="1122334455"
      />

      <Profiless 
        image={myphotoraj} 
        altname="Profile Pic" 
        name="Raj Sapale" 
        pro="Software Developer" 
        tile="TCS" 
        mobile="1122334455"
      />
    </div>
  );
}

export default App;
