

import { OpemModal } from "../StylesComp.js";


function Modal(props) {


    return (
        <>
            <OpemModal>
                <img src={props.digitid} alt='none' />
                <p>  номер фотографии {props.digitid2} </p>
            </OpemModal>
            <button>close</button>
        </>
    );
}
export default Modal;
