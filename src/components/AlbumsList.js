
import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import { Container, FlexContainer, Headercss, Textcss, Cartcontainer } from "../StylesComp.js";
import { NavLink } from "react-router-dom";


function AlbumsList() {

    const count2 = useSelector(state => state.count2)

         {/* className={show ? "  " : "  "} */}
            {/* className='showcomponent' */}

    return (
        <>
            <Headercss >Albums List </Headercss>
      
            <Container >
                {count2.map((item) => (
                    <FlexContainer key={item.id}>
                        <Cartcontainer>
                            < Textcss>
                                Альбом № {item.id} <br />
                            </Textcss>
                            < Textcss>
                                Название альбома: <br /> {item.title}
                            </Textcss>
                            {/* <NavLink to={`https://jsonplaceholder.typicode.com/albums/${item.id}/photos`} > Посмотреть альбом №{item.id}</NavLink> */}
                            <NavLink to={`/${item.id}`} > Посмотреть альбом №{item.id}</NavLink>

                        </Cartcontainer>
                    </FlexContainer>
                ))}
            </Container >
        </>
    );
}
export default AlbumsList;
