import {useState} from 'react';
import Message from '../../components/Message/Message';
import {GrUserManager, GrTime} from 'react-icons/gr'
import Spinner from '../../components/svg/Spinner';
import { interfaceModalMessages } from '../../components/modal/modalData';

function withMessage(BaseComponent, cart=false, lang:string) {
    
    const succesMessage = interfaceModalMessages.succesMessage[lang];
    const failMessage = interfaceModalMessages.failMessage[lang];
    const loadingMessage = interfaceModalMessages.loadingMessage[lang];

    

    return (props) => {
        const [send, setSend] = useState(false);
        const [error, setError] = useState(false);
        const [loading, setLoading] = useState(false);
        
        const loadingSend = () =>{
            setLoading(true)
        }

        const succesSend = () => {
            setLoading(false)
            setSend(true)
            
        }
        const errorSend = () => {
            setLoading(false)
            setError(true)
        }
    
       
        const component = loading ? <Message loading={loading} Icon={Spinner} message={loadingMessage}/> : error ? <Message loading={loading} Icon={GrTime} message={failMessage}/>
        : !loading && !send ? <BaseComponent {...props}  loading={loadingSend} succes={succesSend} error={errorSend}/> : <Message  cart={cart} loading={loading} Icon={GrUserManager} message={succesMessage}/> 

        return component
    }
}


export default withMessage;

