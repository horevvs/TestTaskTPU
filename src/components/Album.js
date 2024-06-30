


import { Container, Headercss, Img, Btn, Thumbnail } from "../StylesComp.js";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function AlbumsList() {

    const [data, setData] = useState([]);
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

    console.log(data);




    return (
        <>
            <Headercss>Albums List </Headercss>
            <Container>
                {data.map((item) => (
                    <Img key={item.id}>
                        <Thumbnail>
                        <img src={item.url} width='220' height='140' alt='none' />
                        </Thumbnail>
                        <p>Альбом №{item.albumId}</p>
                        <p>фото номер {item.id}</p>
                        <Btn> удалить2</Btn>
                    </Img>
                ))}
            </Container >
        </>
    );

}
export default AlbumsList;

