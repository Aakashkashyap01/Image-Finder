import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import BreadCumb from './components/BreadCumb';
import Images from './components/Images';
import { getImages } from './services/api';
import SnackBar from './components/SnackBar';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [count, setCount] = useState(5);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (count < 3 || count > 200) {
      setOpen(true);
      return;
    }
    setOpen(false);

    const getData = async () => {
      try {
        const res = await getImages(text, count);
        if (res && res.data && Array.isArray(res.data.hits)) {
          setData(res.data.hits);
        } 
      } catch (error) {
        console.error('Error fetching images:', error);
        setData([]); 
      }
    };

    getData();
  }, [text, count]);

  return (
    <div>
      <NavBar />
      <BreadCumb setText={setText} setCount={setCount} />
      <Images data={data} />
      <SnackBar open={open} setOpen={setOpen} />
    </div>
  );
}
export default App;
