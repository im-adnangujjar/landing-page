import FirstSection from '../src/pages/homePage/firstSection/FirstSection'
import FourthSection from '../src/pages/homePage/fourthSection/FourthSection'
import HeaderSection from '../src/pages/homePage/headerSection/HeaderSection'
import LastSection from '../src/pages/homePage/lastSection/LastSection'
import SecondSection from '../src/pages/homePage/secondSection/SecondSection'
import ThirdSection from '../src/pages/homePage/thirdSection/ThirdSection'
import Drawer from '../src/component/drawer/Drawer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
   <HeaderSection/>
 <FirstSection/>
   <SecondSection/>
   <ThirdSection/>
 <FourthSection/> 
  <LastSection/>
  <Drawer/>
  </>
}

export default MyApp
