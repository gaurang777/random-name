import {useSelector,useDispatch} from 'react-redux'
import { buy_BOOK, buy_PEN } from './Action'

export default function HookShop() {
    const numberOfBook = useSelector((state)=>state.numberOfBook)
    const numberOfPen = useSelector((state)=>state.numberOfPen)
    const dispatch = useDispatch()
        return (
            <div>
            <hr></hr><h1>React Redux Using Hook!!!</h1>
            <h1>Number Of Book:{numberOfBook}</h1>
            <button onClick={()=> dispatch(buy_BOOK())}>Buy Books</button>
            <h1>Number Of Pen:{numberOfPen}</h1>
            <button onClick={()=> dispatch(buy_PEN())}>Buy Pen</button>
        </div>
        )
    

}