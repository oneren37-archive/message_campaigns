const FormCardTitle = (props: any) => {
    return (
        <>
            {props.type === 'all' && (
                <>
                    <h2>Общая форма</h2>
                    <p>
                        То, что вы впишете здесь будет применено ко всем каналам
                    </p>
                </>
            )}
            {props.type === 'vk' && <h2>Так сообщение будет выглядеть в ВК</h2>}
            {props.type === 'wa' && (
                <h2>Так сообщение будет выглядеть в WhatsApp</h2>
            )}
            {props.type === 'tg' && (
                <h2>Так сообщение будет выглядеть в Телеграме</h2>
            )}
            {props.type === 'sms' && (
                <h2>Так сообщение будет выглядеть в СМС</h2>
            )}
        </>
    );
};

export default FormCardTitle;
