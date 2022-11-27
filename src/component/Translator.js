// import logo from './logo.svg';
import './Translate.css';
import { useEffect, useState } from 'react';
const axios = require('axios').default;

function Translator() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"
//   const handleClearClick = ()=>{ 
//     let newText = '';
//     setText(newText)
// }
  return (
    <div className="">
      
      <div className=' text-center p-3 ' style={{background:'#00eeff'}} >
      <h1 className=' text-center text-3xl font-bold'><span className=' text-blue-600'>K</span><span className=' text-red-600'>K</span> <span className=' text-yellow-300'>T</span><span className=' text-blue-600'>ran</span><span className=' text-green-400'>sla</span><span className=' text-red-600'>tor</span></h1>
        From ({from}) :
        <select onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>


        To ({to}) :
        <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div className=' flex justify-center my-1'>
        <textarea className=' border border-black bg-white p-1 rounded-md okk '
          cols="40"
          rows="13"
          onInput={(e)=> setInput(e.target.value)}
        >
        </textarea>
      </div>
      <div className=' flex justify-center'>
        <textarea className=' border border-black p-1 rounded-md ok ' cols="40" rows="14"  value={output}></textarea>
      </div>
      <div className=' text-center'>
        <button  onClick={e=>translate()}>
            <img className='w-[4em] bg-yellow-400 rounded-full relative bottom-[381px] left-[9em]' src="img/3.png" alt=""/>
            </button>
      </div>
      {/* <div className=' text-center'>
        <button  onClick={handleClearClick}>
            <img className='w-[4em] bg-black rounded-full relative bottom-[490px] left-[9em]' src="img/3.png" alt=""/>
            <i class="fa fa-close text-xl bg-red-500 hover:bg-red-800 hover:text-white p-2 rounded-lg relative bottom-[479px] left-[-8em]"></i>
            </button>
      </div> */}
            {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}

    </div>
  );
}

export default Translator;