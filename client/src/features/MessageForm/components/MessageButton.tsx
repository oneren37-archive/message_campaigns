import { useAppDispatch } from '../../../app/hooks';
import { removeButton, removeButtonInline } from '../newMessageSlice';
import style from '../assets/style.module.css';
import deleteIcon from '../assets/delete.svg';

const MessageButton = (props: any) => {
    const { id, channel, buttonType, text, url } = props;
    const dispatch = useAppDispatch();
    const handleDeleteButton = () => {
        if (buttonType === 'normal') {
            dispatch(removeButton({ id, channel }));
        } else {
            dispatch(removeButtonInline({ id, channel }));
        }
    };

    return (
        <div className={style.message_button}>
            {url && (
                <a href={url} onClick={(e) => e.preventDefault()}>
                    <span>{text}</span>
                </a>
            )}
            {!url && <span>{text}</span>}
            <div className={style.buttonDelete} onClick={handleDeleteButton}>
                <img src={deleteIcon} alt="" />
            </div>
        </div>
    );
};

export default MessageButton;
