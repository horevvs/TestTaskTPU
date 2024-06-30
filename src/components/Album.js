
import '../App.css';

import { Container, Headercss, Img, Btn, Thumbnail } from "../StylesComp.js";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Modal from './Modal.js'

function AlbumsList() {

    //  пробрасываем со сторы наше значение
    const shows = useSelector(state => state.shows)
    // const result = useSelector(state => state. result)

    const dispatch = useDispatch()

    const [data, setData] = useState([]);
    const [digit, setdigit] = useState([]);
    const [digit2, setdigit2] = useState([]);
    const params = useParams();

    console.log(shows)


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

        console.log(shows)
    };


    const hidewindow = () => {
        dispatch({ type: 'close' })
    }


    return (
        <>
            <Headercss className={shows ? " " : "showcomponent "}  >Albums List </Headercss>
            <div className={shows ? "showcomponent " : " "} >
                <Modal digitid={digit} digitid2={digit2} />
            </div>

            <div className={shows ? " " : "showcomponent "} >
                <Container>
                    {data.map((item) => (
                        <Img key={item.id}>
                            <Thumbnail>
                                <img src={item.url} onClick={() => {
                                    openwindow(item.url, item.id)
                                    hidewindow()
                                }} width='220' height='140' alt='none' />
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

