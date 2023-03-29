import { useState } from 'react';
import Message from '@/components/ui/message/message';
import { GrUserManager, GrTime } from 'react-icons/gr';
import Spinner from '../../components/svg/Spinner';
import {DialogModalMessagesEN} from '../../lang/en'
import {DialogModalMessagesRU} from '../../lang/ru'
import { withMessageArgs } from '@/types/types';

 interface newModalProps {
    loading?: func,
    success?: func,
    error?: func,
    closeCart?: (e:any) => void,
    closeCartbtn?: func
}
export type func = () => void
function withMessage(BaseComponent:({loading, success, error, closeCart, closeCartbtn}:newModalProps) => JSX.Element, cart:boolean=false, lang:string): React.ComponentType<newModalProps> {
    const succesMessage = lang === 'EN' ? DialogModalMessagesEN.succesMessage : DialogModalMessagesRU.succesMessage;
    const failMessage = lang === 'EN' ? DialogModalMessagesEN.failMessage : DialogModalMessagesRU.failMessage;
    const loadingMessage = lang === 'EN' ? DialogModalMessagesEN.loadingMessage : DialogModalMessagesRU.loadingMessage;

    return (props) => {
        const [send, setSend] = useState(false);
        const [error, setError] = useState(false);
        const [loading, setLoading] = useState(false);

        const loadingSend = () => {
            setLoading(true);
        };

        const succesSend = () => {
            setLoading(false);
            setSend(true);
        };
        const errorSend = () => {
            setLoading(false);
            setError(true);
        };
      
          
        const LoadComp = loading && <Message loading={loading} Icon={Spinner} message={loadingMessage} cart/>
        const FailComp = error && <Message loading={loading} Icon={GrTime} message={failMessage} cart/>
        const succesComp = !loading && !send ? <BaseComponent  loading={loadingSend} success={succesSend} error={errorSend} /> : <Message  cart={cart} loading={loading} Icon={GrUserManager} message={succesMessage}/> 
        const final = LoadComp || FailComp || succesComp
        return final;
    };
}

export default withMessage;
