import React , {useState,useEffect} from 'react'

const Index = () => {
    const [data,setData] = useState([]);
   
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.4:5000');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  return (
    <>
    <h1>hello</h1>
    {data && data.map((d,i)=><div key={i}>{d}</div>)}
    </>
  )
}

export default Index