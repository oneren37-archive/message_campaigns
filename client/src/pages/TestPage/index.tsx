import style from './style.module.css';
import ChatViewVK from '../../features/chatView/ChatViewVK';

const TestPage = () => {
    return (
        <div className={style.container}>
            <ChatViewVK />
        </div>
    );
};

export default TestPage;
