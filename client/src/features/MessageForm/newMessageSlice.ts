import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './consts';

export const newMessageReducer = createSlice({
    name: 'newMessageReducer',
    initialState,
    reducers: {
        textChange: (state, action) => {
            const toChannel = action.payload.channel;
            const text = action.payload.text;
            state.channels.forEach((channel) => {
                if (toChannel === 'all' || toChannel === channel.channelType) {
                    channel.text = text;
                }
            });
        },
        addButton: (state, action) => {
            const toChannel = action.payload.channel;
            const button = action.payload.button;
            state.channels.forEach((channel) => {
                if (toChannel === 'all' || toChannel === channel.channelType) {
                    if (channel.restrictions.isButtonAvailable) {
                        if (!channel.restrictions.isButtonLinkAvailable)
                            button.url = '';
                        channel.buttons.push(button);
                    }
                }
            });
        },
        addButtonInline: (state, action) => {
            const toChannel = action.payload.channel;
            const button = action.payload.button;
            state.channels.forEach((channel) => {
                if (toChannel === 'all' || toChannel === channel.channelType) {
                    if (!channel.restrictions.isButtonInlineLinkAvailable)
                        button.url = '';
                    if (channel.restrictions.isButtonAvailable)
                        channel.buttons_inline.push(button);
                }
            });
        },
        removeButton: (state, action) => {
            const toChannel = action.payload.channel;
            const id = action.payload.id;
            state.channels.forEach((channel) => {
                if (toChannel === 'all' || toChannel === channel.channelType) {
                    channel.buttons = channel.buttons.filter(
                        (e) => e.id !== id,
                    );
                }
            });
        },

        removeButtonInline: (state, action) => {
            const toChannel = action.payload.channel;
            const id = action.payload.id;
            state.channels.forEach((channel) => {
                if (toChannel === 'all' || toChannel === channel.channelType) {
                    channel.buttons_inline = channel.buttons_inline.filter(
                        (e) => e.id !== id,
                    );
                }
            });
        },

        clear: () => initialState,
    },
});

export const {
    textChange,
    addButton,
    addButtonInline,
    removeButton,
    removeButtonInline,
    clear,
} = newMessageReducer.actions;

export default newMessageReducer.reducer;
