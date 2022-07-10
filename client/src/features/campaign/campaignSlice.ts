import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CampaignState {
    campaigns: {
        id: number;
        title: string;
        description: string;
    }[];
    status: 'pending' | 'loaded' | 'error';
}
const initialState: CampaignState = {
    campaigns: [],
    status: 'pending',
};

export const campaignReducer = createSlice({
    name: 'campaign',
    initialState,
    reducers: {
        load: (state, action) => {
            state.campaigns = action.payload;
            state.status = 'loaded';
        },
        error: (state) => {
            state.campaigns = [];
            state.status = 'error';
        },
        add: (state, action) => {
            state.campaigns.push(action.payload);
        },
        remove: (state, action) => {
            state.campaigns = state.campaigns.filter(
                (campaign) => campaign.id !== action.payload.id,
            );
        },
    },
});

export const { load, error, add, remove } = campaignReducer.actions;

export default campaignReducer.reducer;
