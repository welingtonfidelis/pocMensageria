import { createStore } from 'redux';

const INITIAL_STATE = {
    name: '',
    token: '',
    signalr: '',
    urlAvatar: '',
    company: {
        'name': '',
        'id': '',
    },
    headerIntentPage: { name: '', avatar: '' },
    conversation: {},
    baseURLClient: 'http://192.168.0.109:7090/api',
    baseURLMessage: 'http://192.168.0.109:7077/api',
    baseURLMessageExternal: 'http://192.168.0.109:7072/api',
    hubName: 'techcdp'
};

function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            const { name, token, signalr, urlAvatar, company } = action.user;

            return {
                ...state, name, token, signalr, urlAvatar, company
            }

        case 'UPDATE_CONVERSATION':
            const { id, cvs } = action.conversation;

            return {
                ...state, conversation: { ...state.conversation, [id]: cvs }
            }

        case 'ADD_MESSAGE':
            const { message } = action.conversation, id2 = action.conversation.id;

            return {
                ...state,
                conversation: {
                    ...state.conversation,
                    [id2]: {
                        ...state.conversation[id2],
                        message: [...state.conversation[id2].message, message]
                    }
                }
            }

        case 'ADD_CONVERSATION':
            const { newConversation } = action.conversation;

            return {
                ...state,
                conversation: {
                    ...state.conversation, [newConversation.conversationId]: newConversation
                }
            }

        case 'UPDATE_HEADER_PAGE':
            const id1 = action.conversation.id;
            const consumerName = state.conversation[id1].consumer.name;
            const consumerNameArry = (consumerName).split(' ');
            const consumerAvatar = ((consumerNameArry[0]).charAt(0) || '') +
                ((consumerNameArry[1]).charAt(0) || '');

            return {
                ...state, headerIntentPage: { name: consumerName, avatar: consumerAvatar }
            }

        default:
            return state;
    }
}

const store = createStore(user);

export default store;
