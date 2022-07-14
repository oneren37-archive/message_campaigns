import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './style.module.css';
import ChatViewVK from '../../features/views/chatViewVK/ChatViewVK';
import ChatViewSMS from '../../features/views/chatViewSMS/ChatViewSMS';
import ChatViewTG from '../../features/views/chatViewTG/ChatViewTG';
import { remove } from '../../features/campaign/campaignSlice';
import ChatViewWA from '../../features/views/chatViewWA/ChatViewWA';

const CampaignPage = (props: any) => {
    const location: any = useLocation();
    const navigate = useNavigate();
    const state = location.state;

    const [messages, setMessages] = useState<null | Array<any>>(null);
    const [loadingStatus, setLoadingStatus] = useState<string>('loading');

    useEffect(() => {
        fetch(
            '/api/message?' +
                new URLSearchParams({
                    id: state.id,
                }),
        )
            .then((res) => {
                if (res.status !== 200) throw new Error('not 200');
                return res;
            })
            .then((res) => res.json())
            .then((res) => setMessages(res))
            .then(() => setLoadingStatus(''))
            .catch(() => setLoadingStatus('error'));
    }, []);

    return (
        <>
            <h1>{state.title}</h1>
            <p>ниже приведены сообщения даннной кампании</p>
            <button onClick={() => navigate(-1)} className="button">
                назад к кампаниям
            </button>
            {loadingStatus === 'loading' && <p>Сообщения загружаются</p>}
            {loadingStatus === 'error' && (
                <p className="error">Произошла ошибка в загрузке сообщений</p>
            )}
            <br />
            {messages &&
                messages.map((message, i) => (
                    <MessageView {...message} key={i} />
                ))}
            <button
                className="button"
                onClick={() => navigate('/new-message', { state })}
            >
                Добавить сообщение
            </button>
        </>
    );
};

const MessageView = (props: any) => {
    const getChannelName = (type: string) => {
        if (type === 'vk') return 'Вконтакте';
        if (type === 'wa') return 'WhatsApp';
        if (type === 'tg') return 'Телеграм';
        if (type === 'sms') return 'СМС';
        return 'unknown';
    };

    const [activeChannel, setActiveChannel] = useState(Object.keys(props)[0]);
    return (
        <>
            <div className={style.MessageView}>
                <div className={style.view}>
                    {activeChannel === 'vk' && (
                        <ChatViewVK
                            text={props.vk.text}
                            buttons={props.vk.buttons}
                            buttonsInline={props.vk.buttons_inline}
                        />
                    )}
                    {activeChannel === 'wa' && (
                        <ChatViewWA
                            text={props.tg.text}
                            buttons={props.tg.buttons}
                            buttonsInline={props.tg.buttons_inline}
                        />
                    )}
                    {activeChannel === 'tg' && (
                        <ChatViewTG
                            text={props.tg.text}
                            buttons={props.tg.buttons}
                            buttonsInline={props.tg.buttons_inline}
                        />
                    )}
                    {activeChannel === 'sms' && (
                        <ChatViewSMS
                            text={props.sms.text}
                            buttons={props.sms.buttons}
                            buttonsInline={props.sms.buttons_inline}
                        />
                    )}
                </div>

                <div className={style.controls}>
                    {Object.keys(props).map((channel) => (
                        <div
                            onClick={() => {
                                setActiveChannel(channel);
                            }}
                            className={style.controlsItem}
                        >
                            {getChannelName(channel)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CampaignPage;
