import {GiPopcorn} from "react-icons/gi"

function Home() {
    return (
      <div  className='home'>

      <div className="home-text">
          <> <GiPopcorn></GiPopcorn> Pronađi svoj omiljeni film! </>
      </div>

      <br /><br /><br /><br /><br />
      <div className="flex-container">
          <div className="Home-paragraf">
              <p>
                <br></br> <br></br> Dobrodošli na Filmovi website, vaše odredište za sve filmove! Naša veb stranica je 
                napravljena za ljubitelje filmova i entuzijaste koji žele da prate svoje omiljene filmove i otkriju 
                nove. Ovde možete da kreirate svoju personalizovanu listu filmova i dodati filmove koje volite u svoje 
                favorite.  </p>
                <p>Naše korisničko sučelje olakšava pretragu 
                i pronalaženje filmova koje tražite, a naš sistem preporuka vam pomaže da otkrijete skrivene dragulje 
                koje ste možda propustili. Zato, pridružite nam se danas i počnite da istražujete svet filmova kao 
                nikada ranije!</p>
                <br></br>
          </div>
            



        </div>  

    </div>

    );
  }

  export default Home;