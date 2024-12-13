import { Await, defer, Link, useLoaderData, useNavigation } from 'react-router-dom';

import ImageHolder from '../../components/imageholder1/ImageHolder1';
import Button from "../../../shared/components/UI/Button/Button";
import './Home.css';
import StudentExperience from '../../components/studentexperience/StudentExperience';
import PharmacyItemsHome from '../../../pharmacy/components/pharmacy/PharmacyItemsHome';
import Modal from '../../../shared/components/UI/Modal/modal';
import useOpenModal from '../../../shared/hooks/useOpenModal';
import { Suspense, useContext, useEffect } from 'react';
// import LoadingSpinner from '../../../shared/components/UI/loadingspinner/LoadingSpinner';
import { path } from '../../../shared/utils/imagePath';
import siren from '../../../image/Siren.svg';
import call from '../../../image/call.svg';
import arrow from '../../../image/arrow.svg';
import add from '../../../image/add.svg';
import com from '../../../image/com.svg';
import HomeLoader from '../../../shared/components/UI/homeloader/HomeLoader';
import Skeleton from '../../../shared/components/skeleton/Skeleton';
import {authContext} from '../../../shared/context/auth-context'
import SlideContrast from '../../../shared/components/slider/SlideContrast';


function Home() {
  const response = useLoaderData();
  const navigation = useNavigation();
  const [modalRef, openModal] = useOpenModal();
  const auth = useContext(authContext);

  useEffect(() => {
    if(response.error){
      openModal();
    }
  }, [response.error, openModal])

  if(response.error){

    return (
      <>
      <Modal  ref={modalRef}>
        {response.message}
      </Modal>
      </>
    )
  }

   return (
      <div className='wrapper'>
      {navigation.state === 'loading' && <Skeleton />}
      {/* <Skeleton /> */}
      <ImageHolder />
      <div style={{visibility: 'hidden'}}><SlideContrast sidedrawer='' /></div>
        <div className='actions'>
        <div className='item one'>
          <div className='content'>
          <img src={siren} alt='siren' />
          <p>Emergency cases</p>
          </div>
          <div className='content2'>
            <p>
            Call our dedicated line for immediate assistance
            when every second counts. Let us help you
            find urgent medical support without delay.
            </p>
            <p className='cta'><img src={call} alt='call' />+250780058709</p>
          </div>
        </div>
        <div className='item two'>
          <div className='content'>
          <img src={add} alt='siren' />
          <p>Register Pharmacy</p>
          </div>
          <div className='content2'>
            <p>
            Partner with us to expand your reach and help
             the community access your services. stidents needs this everyday,
              Register your pharmacy
              today and make a difference!
            </p>
            <div  className='button'>
            {!auth.isLoggedIn && <Link to='/authenticate/pharmacy/signup'><Button type='a' className='cta-white white'>Register <img src={arrow} alt='arrow' /> </Button></Link>}
            </div>
          </div>
        </div>
        {!auth.isLoggedIn && <div className='item three'>
        <div className='content'>
        <img src={com} alt='siren' />
          <p>Join Community</p>
          </div>
          <div className='content2'>
            <p>
            Be part of a growing network that connects individuals to
             essential healthcare services. Share,
             collaborate, and support a healthier future.
            </p>
            <div  className='button'>
            <Link to='/authenticate/student/signup'><Button type='a' className='cta-white white'>Join <img src={arrow} alt='arrow' /> </Button></Link>
            </div>
          </div>
        </div>}
        {auth.isLoggedIn && <div className='item three'>
        <div className='content'>
        <img src={com} alt='siren' />
          <p>Joined Community</p>
          </div>
          <div className='content2'>
            <p>
             Welcome back, {auth.isLoggedIn.name}! you are among us
             Let's find medicines and pharmacies conveniently.
            </p>
          </div>
        </div>}
      </div>
      <div className='home'>

      <StudentExperience />
      <div className='cta-getstarted'>
      <p className='cta-getstarted__text'>Ready to get started? Join our commuity and make finding medication stressfree!</p>
      <div className='cta-getstarted__button'>
      <Link to="/authenticate/student/signup"><Button>Get Started</Button></Link>
      </div>
      </div>
      <section className='featured-pharmacies'>
        <h1>Featuted Pharmacies.</h1>
        <Suspense fallback={<HomeLoader />}>
        <Await resolve={response.pharmas}>
        {(loadedPharmas) => <PharmacyItemsHome pharmas={loadedPharmas} />}
        </Await>
        </Suspense>
        <div className='bottombutton'>
        <Link to="/directory"><Button type='a' className='cta-white'>See More</Button></Link>
        </div>
      </section>
      </div>
      </div>
    );
}

export default Home;

async function loadpharma() {
  try{
    const response = await fetch(`${path}/pharma`);
  if(!response.ok){
    return {error: true, message: 'failed to fetch from server'}
  }

  const resData = await response.json();
  return resData;
  }
  catch {
    return {error: true, message: 'server is down now can not fetch'}
  }
}

export function loader() {
  return defer({
    pharmas: loadpharma()
  })
}