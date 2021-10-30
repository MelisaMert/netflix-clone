import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import List from "../../components/list/List";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
   
    useEffect(() => {
        const getRandomLists = async () => {
            try {
              const res = await axios.get(
                `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre: ""}`,
                {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2MwMWZkY2MxYjI3ZjY4MWU1MGI1NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTU4MTI1OSwiZXhwIjoxNjM2MDEzMjU5fQ.JIheSVG2O8eb7KG4W1lhnd5SHKkc7nIn7Q4OTggSocQ"
                    }
                }
            );
            console.log('lists', res.data);
            setLists(res.data)
            } catch (err) {
              console.error(err);
            }
        };
        getRandomLists();
    }, [type,genre]);

    return (<>
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list)=> (
              <List list={list} />
            ))}
       
        </div>
    </>)

}

export default Home
