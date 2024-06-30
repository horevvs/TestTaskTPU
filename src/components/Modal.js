

import { OpemModal, Position } from "../StylesComp.js";


function Modal(props) {


    return (
        <>
            <OpemModal>
                <img src={props.digitid} alt='none' />
                <p>  номер фотографии {props.digitid2} </p>
                <Position>close</ Position> 
            </OpemModal>
       
        </>
    );
}
export default Modal;
