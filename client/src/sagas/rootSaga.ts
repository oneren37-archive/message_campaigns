import { all } from 'redux-saga/effects';
import CampaignSaga from './CampaignSaga';
import { AppDispatch } from '../app/store';

export default function* rootSaga(dispatch: AppDispatch) {
    yield all([CampaignSaga(dispatch)]);
}
