import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
  
export default function ScrollToTop() {  
  const location = useLocation();
  // const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}