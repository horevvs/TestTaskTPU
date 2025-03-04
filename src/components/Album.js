
import '../App.css';

import { Container, Headercss, Img, Btn, Thumbnail } from "../StylesComp.js";
import { NavLink } from "react-router-dom";
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

    //  инициализируем наши состояния
    const [data, setData] = useState([]);
    const [digit, setdigit] = useState([]);
    const [digit2, setdigit2] = useState([]);
    const params = useParams();


    // после того как перешли по урлу с урла получаем паарметр, потом пока компонент не начал рендериться, делаем новый гет запрос по новому урлу
    // и новый json  после магии ложим в сосояние
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
            .then((response) => {
                // в наше состяоние положили результат запроса
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

            // fetch('https://jsonplaceholder.typicode.com/photos', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //       title: 'foo',
            //       body: 'bar',
            //       userId: 1,
            //     }),
            //     headers: {
            //       'Content-type': 'application/json; charset=UTF-8',
            //     },
            //   })
            //     .then((response) => response.json())
            //     .then((json) => console.log(json));

    }, [params]);


    // функция для работы с модалкой в модалку прокидываем адрес и название
    const openwindow = (url, id) => {
        setdigit(url)
        setdigit2(id)
    };

    // функция для работы с состоянием в редаксе, в редюсере меняет состояние
    const hidewindow = () => {
        dispatch({ type: 'close' })
    }


    return (
        <>
            <div>

                <Headercss className={shows ? " " : "showcomponent "} >
                    <NavLink className={shows ? " " : "showcomponent "} to={`/`} >   На главную страницу</NavLink>
                </Headercss>

            </div>



            {/* блок модального окна, после клика на картинку остальные блоки скрываются, этот компонент отображается  */}
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

