import style from './assets/style.module.css';
import ChatViewTG from '../views/chatViewTG/ChatViewTG';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/hooks';
import {
    addButton,
    addButtonInline,
    removeButton,
    removeButtonInline,
    textChange,
} from './newMessageSlice';
import deleteIcon from './assets/delete.svg';
import { useState } from 'react';
import { IButton } from './types';
import ChatViewSMS from '../views/chatViewSMS/ChatViewSMS';
import ChatViewVK from '../views/chatViewVK/ChatViewVK';
import ButtonsForm from './components/ButtonsForm';
import FormCardTitle from './components/FormCardTitle';
import FormCard from './components/FormCard';

const MessageForm = () => {
    return (
        <div>
            <h1>Форма нового сообщения</h1>
            <span>выберите кампанию</span>
            <select name="campaign" id="campaign-select">
                <option value="">Кампания 1</option>
                <option value="">Кампания 2</option>
                <option value="">Кампания 3</option>
                <option value="">Кампания 4</option>
                <option value="">Кампания 5</option>
            </select>
            <div className={style.cards}>
                <FormCard type="all" />
                <FormCard type="vk" />
                <FormCard type="wa" />
                <FormCard type="tg" />
                <FormCard type="sms" />
            </div>
        </div>
    );
};

export default MessageForm;
