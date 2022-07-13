import { useLocation, useNavigate } from 'react-router-dom';

const CampaignPage = (props: any) => {
    const location: any = useLocation();
    const navigate = useNavigate();
    const state = location.state;

    return (
        <>
            <h1>{state.title}</h1>
            <p>ниже приведены сообщения даннной кампании</p>
            <button
                className="button"
                onClick={() => navigate('/new-message', { state })}
            >
                Добавить сообщение
            </button>
        </>
    );
};

export default CampaignPage;
