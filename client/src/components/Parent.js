// import logo from './logo.svg';
import Footer from './/Footer';
import Navbar from './Navbar';
import Posts from './Posts';

function Parent() {
  return (
    <div className="Parent text-center">
      <Navbar/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default Parent;
