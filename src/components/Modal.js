import { useSelector, useDispatch } from 'react-redux';

import { OpemModal, Position } from "../StylesComp.js";


function Modal(props) {

   
    const result = useSelector(state => state.result)

    const dispatch = useDispatch()

    const hidewindow = () => {
        dispatch({ type: 'close' })
    }




    return (
        <>
            <OpemModal>
                <img src={props.digitid} alt='none' />
                <p>  номер фотографии {props.digitid2} </p>
                <p>  {result} </p>
                <Position onClick={hidewindow}>close</ Position>
            </OpemModal>

        </>
    );
}
export default Modal;
