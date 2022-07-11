import 'bootstrap/dist/css/bootstrap.css' ;
import { useParams } from 'react-router-dom';


const MessageCont = () => {
    let {Id} = useParams();
    return(
        <div className='border border-white h-100'>
            <h3 >ChatId:{Id}</h3>

        </div>
    );
};


export default MessageCont;