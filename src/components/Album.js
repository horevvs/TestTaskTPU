
import '../App.css';

import { Container, Headercss, Img, Btn, Thumbnail } from "../StylesComp.js";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Modal from './Modal.js'

function AlbumsList() {


    const [data, setData] = useState([]);
    const [digit, setdigit] = useState([]);
    const [digit2, setdigit2] = useState([]);
    const [show, setshow] = useState(false);
    const params = useParams();


    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params]);



    const openwindow = (url, id) => {
        setdigit(url)
        setdigit2(id)
        setshow(true)
    };




    return (
        <>
            <Headercss className={show ? "showcomponent " : " "} >Albums List </Headercss>
            <div >
                <Modal digitid={digit} digitid2={digit2} />
            </div>

            {/* className="showcomponent" */}
            <div  >
                {/* className={show ? "showcomponent " : " "} */}
                <Container>
                    {data.map((item) => (
                        <Img key={item.id}>
                            <Thumbnail>
                                <img src={item.url} onClick={() => openwindow(item.url, item.id)} width='220' height='140' alt='none' />
                            </Thumbnail>
                            <p >Альбом №{item.albumId}</p>
                            <p>фото номер {item.id}</p>
                            <Btn> удалить2</Btn>
                        </Img>
                    ))}
                </Container >
            </div>
        </>
    );

}
export default AlbumsList;

