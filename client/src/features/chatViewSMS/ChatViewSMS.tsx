import style from './assets/style.module.css';

const ChatViewSMS = (props: any) => {
    const { text } = props;
    return (
        <>
            <div className={style.smsContainer}>
                <div className={style.header}>
                    <div className={style.not_bar}>
                        <div className={style.sim}>AirTel</div>
                        <div className={style.wifi}></div>
                        <div className={style.time}>1:27 AM</div>
                        <div className={style.bat}></div>
                    </div>
                    <div className={style.text_head}>
                        <div className={style.back}>{'<'}</div>
                        <div className={style.profile}>Fromni</div>
                        <div className={style.info}>i</div>
                    </div>
                </div>

                <div className={style.message_area}>
                    <div>
                        <span className={style.sms_box}>{text}</span>
                    </div>
                </div>

                <div className={style.text}>
                    <div className={style.send_dock}>
                        <div className={style.cam_icon}></div>
                        <input type="text" className={style.m_text} />
                        <div className={style.send_button}>Send</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatViewSMS;
