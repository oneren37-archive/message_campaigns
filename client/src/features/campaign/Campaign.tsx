import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import style from './Campaign.module.css';
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { add, remove } from './campaignSlice';
import closeIcon from './close.svg';
import vkIcon from '../../assets/icons/vk.svg';
import waIcon from '../../assets/icons/wa.svg';
import tgIcon from '../../assets/icons/tg.svg';
import smsIcon from '../../assets/icons/sms.svg';
import deleteIcon from './trash.svg';
import { useNavigate } from 'react-router-dom';

export type CampaignProps = {
    id: number;
    title: string;
    description?: string;
    channels?: ['vk'?, 'wa'?, 'tg'?, 'sms'?];
};

const CampaignsContainer = () => {
    const campaigns = useSelector(
        (state: RootState) => state.campaign.campaigns,
    );
    const status = useSelector((state: RootState) => state.campaign.status);
    const [popupShow, setPopupShow] = useState<boolean>(false);
    const getNextId = () => {
        const last = Math.max(...campaigns.map((e) => e.id));
        return last !== -Infinity ? last + 10 : 1;
    };

    return (
        <>
            <h1>Кампании</h1>
            {status === 'pending' && <p>Кампании загружаются</p>}
            {status === 'error' && <p>Произошла ошибка в загрузке кампаний</p>}
            {status === 'loaded' && (
                <>
                    <button
                        className={'button'}
                        onClick={() => setPopupShow(true)}
                    >
                        Добавить кампанию
                    </button>
                    {campaigns &&
                        campaigns.map((campaign) => (
                            <Campaign
                                {...campaign}
                                key={campaign.id || Date.now()}
                            />
                        ))}
                    <AddCampaignPopup
                        popupShow={popupShow}
                        onClose={() => setPopupShow(false)}
                        getNextId={getNextId}
                    />
                </>
            )}
        </>
    );
};

const Campaign = (props: CampaignProps) => {
    const icons = {
        vk: vkIcon,
        wa: waIcon,
        tg: tgIcon,
        sms: smsIcon,
    };

    const dispatch = useAppDispatch();

    const handleRemove = () => {
        fetch('/api/campaign', {
            method: 'DELETE',
            body: JSON.stringify({ id: props.id }),
            headers: { 'Content-Type': 'application/json' },
        }).then(() => dispatch(remove({ id: props.id })));
    };

    const navigate = useNavigate();

    return (
        <div
            className={style.campaign}
            onClick={() => navigate('/campaign', { state: props })}
        >
            <h4>{props.title}</h4>
            <p>{props.description || ''}</p>
            <div>
                {props.channels &&
                    props.channels.map(
                        (channel) =>
                            channel && (
                                <img
                                    className={style.icon}
                                    src={icons[channel]}
                                    alt={channel}
                                    key={channel}
                                />
                            ),
                    )}
            </div>
            <div className={style.delete + ' button'} onClick={handleRemove}>
                <img src={deleteIcon} alt="" />
            </div>
        </div>
    );
};

const AddCampaignPopup = (props: any) => {
    const dispatch = useAppDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        fetch('/api/campaign', {
            method: 'POST',
            body: JSON.stringify({
                name: data.get('title'),
                description: data.get('description'),
                channels: data.getAll('channels'),
            }),
            headers: { 'Content-Type': 'application/json' },
        }).then(() =>
            dispatch(
                add({
                    id: props.getNextId(),
                    title: data.get('title'),
                    description: data.get('description'),
                    channels: data.getAll('channels'),
                }),
            ),
        );
        props.onClose();
    };

    return (
        <>
            {props.popupShow && (
                <div className={style.popupOverlay}>
                    <form onSubmit={handleSubmit} className={style.popup}>
                        <h3>Добавить кампанию</h3>
                        <input
                            type="text"
                            name="title"
                            placeholder="Название"
                        />
                        <textarea name="description" placeholder="Описание" />
                        <fieldset className={style.fieldset}>
                            <legend>Выберите каналы</legend>
                            <div>
                                <input
                                    type="checkbox"
                                    id="vk"
                                    name="channels"
                                    value="vk"
                                />
                                <label htmlFor="vk">Вконтакте</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="wa"
                                    name="channels"
                                    value="wa"
                                />
                                <label htmlFor="wa">WhatsApp</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="tg"
                                    name="channels"
                                    value="tg"
                                />
                                <label htmlFor="tg">Telegram</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="sms"
                                    name="channels"
                                    value="sms"
                                />
                                <label htmlFor="sms">SMS</label>
                            </div>
                        </fieldset>
                        <input
                            type="submit"
                            className="button"
                            value="Сохранить"
                        ></input>
                        <div
                            className={style.closeButton}
                            onClick={props.onClose}
                        >
                            <img src={closeIcon} alt="close" />
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CampaignsContainer;
