import { load, error } from '../features/campaign/campaignSlice';
import { AppDispatch } from '../app/store';

export default function* CampaignSaga(dispatch: AppDispatch): any {
    try {
        const campaigns = yield fetch('/api/campaign')
            .then((res) => {
                if (res.status !== 200) throw new Error('not 200');
                return res;
            })
            .then((res) => res.json());
        dispatch(load(campaigns));
    } catch {
        dispatch(error());
    }
}
