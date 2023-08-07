import React, { Component, useRef } from 'react';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import Navbar from './components/Navbar/Navbar';
import Pants from './components/Pants/Pants';
import Tshirts from './components/Tshirts/Tshirts';
import Glasses from './components/Glasses/Glasses';
import SecondBanner from './components/SecondBanner/SeconBanner';
import SpecialSale from './components/SpecialSale/SpecialSale';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import ProfileBanner from './components/ProfileBanner/ProfileBanner';
import Favourite from './components/Favourite/Favourite';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList ';
import AboutBanner from './components/AboutBanner/AboutBanner ';
import ProfileNav from './components/ProfileNav/ProfileNav';
import Pbanner from './components/Pbanner/Pbanner';
import PrBanner from './components/PrBanner/PrBanner';
import OrderHistory from './components/OrderHistory/OrderHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Route: 'pants',
      OfferRoute: 'Special Sale',
      MainRoute: 'signin',
      userId: props.userId || 0,
      ProfileRoute : 'pi'
    };
    this.specialSaleRef = React.createRef();
  }

  onRouteChange = (route) => {
    if (route === '/shirts') {
      this.setState({ Route: 'shirts' });
    } else if (route === '/pants') {
      this.setState({ Route: 'pants' });
    } else if (route === '/tshirts') {
      this.setState({ Route: 'tshirts' });
    } else if (route === '/glasses') {
      this.setState({ Route: 'glasses' });
    }
  };

  onProfileRouteChange= (route) =>{
    this.setState({ProfileRoute : route});
  }

  onMainRouteChange = (route, userId) => {
    this.setState({ MainRoute: route, userId: userId });
  };

  onUserId = () => {
    return this.state.userId;
  };

  scrollToSpecialSale = () => {
    if (this.specialSaleRef.current) {
      this.specialSaleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { MainRoute, Route, userId } = this.state;

    
    let mainContent = null;
    if (MainRoute === 'signin') {
      mainContent = <SignIn onMainRouteChange={this.onMainRouteChange} />;
      console.log('efwef');
      console.log(userId);
      
    } else if (MainRoute === 'home') {
      mainContent = (
        <div>
          <Navigation onMainRouteChange={this.onMainRouteChange} userId={userId}/>
          <CategoriesPage onScrollToSpecialSale={this.scrollToSpecialSale} userId={userId}/>
          <Banner />
          <Navbar onRouteChange={this.onRouteChange} userId={userId}/>
          {Route === 'shirts' ? (
            <ProductList userId={userId} />
          ) : Route === 'pants' ? (
            <Pants userId={userId} />
          ) : Route === 'tshirts' ? (
            <Tshirts userId={userId} />
          ) : Route === 'glasses' ? (
            <Glasses userId={userId} />
          ) : (
            <ProductList userId={userId} />
          )}
          <SecondBanner />
          <div ref={this.specialSaleRef}>
            <SpecialSale userId={userId}/>
          </div>
          <AboutBanner />
        </div>
      );
      console.log(userId);
      console.log('efw');
      
      
    } else if (MainRoute === 'fav') {
      mainContent = (
        <div>
          <Navigation onMainRouteChange={this.onMainRouteChange} userId={userId} />
          <ProfileBanner />
          <Favourite userId={userId} />
          <AboutBanner />
        </div>
      );
    } else if (MainRoute === 'cart') {
      mainContent = (
        <div>
          <Navigation onMainRouteChange={this.onMainRouteChange} userId={userId}/>
          <ProfileBanner />
          <Cart userId={userId} />
          <AboutBanner />
        </div>
      );
    } else if (MainRoute === 'profile') {
      mainContent = (
        <div>
          <Navigation onMainRouteChange={this.onMainRouteChange}  userId={userId}/>
          <ProfileBanner />
          <ProfileNav onProfileRouteChange={this.onProfileRouteChange}/>
          {
            this.state.ProfileRoute === "pi"?(
              <Profile onMainRouteChange={this.onMainRouteChange} userId={userId} />
            ) : this.state.ProfileRoute === "order"?(
              <OrderHistory userId={userId}/>
            ):(
              <h1>wkfek</h1>
            )
          }
        
          <Pbanner />
          <AboutBanner />

       
          
        </div>
      );
      console.log('pf: ',userId);
    } else if (MainRoute === 'register') {
      mainContent = (
        <div>
          <Register onMainRouteChange={this.onMainRouteChange} />
        </div>
      );
    } else {
      mainContent = <h1>Wrong Section</h1>;
    }

    return <div className="app">{mainContent}</div>;
  }
  
}

export default App;
