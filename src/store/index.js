import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { updateUserLocalStorage } from '../services/LocalStorage';
import {
    UPDATE_USER_STORE,
    OPEN_NEW_GROUP_DIALOG,
    CLOSE_NEW_GROUP_DIALOG,
    OPEN_NEW_GRADIENT_DIALOG,
    CLOSE_NEW_GRADIENT_DIALOG,
    ADD_NEW_GROUP,
    CHOOSE_GROUP,
    DELETE_GROUP,
    ADD_NEW_GRADIENT,
    DELETE_GRADIENT
} from './mutation-types';
import UserModel from '../models/UserModel';
import GradientGroupModel from '../models/GradientGroupModel';
import GradientGroupItemModel from '../models/GradientGroupItemModel';

function getGroupById(user, id) {
    let groupLink;
    for (let i = 0; i < user.gradientGroups.length; i++) {
        let group = user.gradientGroups[i];
        if (group.id === id) groupLink = group;
        if (groupLink !== undefined) return groupLink;
        else return user.gradientGroups[0] || {};
    }
}

const state = {
    user: {
        gradientGroups: []
    },
    currentGroupId: 0,
    windowDialogs: {
        isNewGroupDialogOpened: false,
        isNewGradientDialogOpened: false
    }
}
const getters = {
    getUserGradientGroups: (state) => state.user.gradientGroups,
    isNewGroupDialogOpened: (state) => state.windowDialogs.isNewGroupDialogOpened,
    isNewGradientDialogOpened: (state) => state.windowDialogs.isNewGradientDialogOpened,
    currentGroupId: (state) => state.currentGroupId,
    getGradientsInCurrentGroup: (state) => getGroupById(state.user, state.currentGroupId).gradients
}

const actions = {
    loginUser({ commit }, user) {
        let serializedUser = new UserModel(user);
        commit(UPDATE_USER_STORE, serializedUser);
    },
    registerNewUser({ commit }, user) {
        let newUser = new UserModel(user);
        updateUserLocalStorage(newUser);
        commit(UPDATE_USER_STORE, newUser);
    },
    addNewGroup({ commit }, groupName) {
        let newGroup = new GradientGroupModel({ name: groupName });
        commit(ADD_NEW_GROUP, newGroup);
    },
    chooseGroup({ commit }, id) {
        commit(CHOOSE_GROUP, id)
    },
    deleteGroup({ commit }, id) {
        commit(DELETE_GROUP, id)
    },
    addNewGradient({ commit }, gradient) {
        let newGradient = new GradientGroupItemModel({ gradient: gradient })
        commit(ADD_NEW_GRADIENT, newGradient)
    },
    deleteGradient({ commit }, gradientId) {
        commit(DELETE_GRADIENT, gradientId)
    },
    // dialogs
    openNewGroupDialog({ commit }) {
        commit(OPEN_NEW_GROUP_DIALOG);
    },
    closeNewGroupDialog({ commit }) {
        commit(CLOSE_NEW_GROUP_DIALOG);
    },
    openNewGradientDialog({ commit }) {
        commit(OPEN_NEW_GRADIENT_DIALOG);
    },
    closeNewGradientDialog({ commit }) {
        commit(CLOSE_NEW_GRADIENT_DIALOG);
    }
}

const mutations = {
    [UPDATE_USER_STORE](state, user) {
        state.user = user;
    },
    [ADD_NEW_GROUP](state, group) {
        state.user.gradientGroups.push(group);
        state.currentGroupId = group.id;
        updateUserLocalStorage(state.user);
    },
    [CHOOSE_GROUP](state, id) {
        state.currentGroupId = id;
    },
    [DELETE_GROUP](state, id) {
        for (let i = 0; i < state.user.gradientGroups.length; i++) {
            let gradientGroup = state.user.gradientGroups[i];
            if (gradientGroup.id === id) {
                if (state.currentGroupId === id) {
                    state.currentGroupId = -1;
                }
                state.user.gradientGroups.splice(i, 1);
            }
        }
        updateUserLocalStorage(state.user);
    },
    [ADD_NEW_GRADIENT](state, gradient) {
        let gradientGroup = getGroupById(state.user, state.currentGroupId);
        gradientGroup.gradients.push(gradient);
        updateUserLocalStorage(state.user);
    },
    [DELETE_GRADIENT](state, gradientId) {
        let gradientGroup = getGroupById(state.user, state.currentGroupId);
        for (let i = 0; i < gradientGroup.gradients.length; i++) {
            let gradient = gradientGroup.gradients[i];
            if (gradientId === gradient.id) {
                gradientGroup.gradients.splice(i, 1)
                break;
            }
        }
        updateUserLocalStorage(state.user);
    },
    // dialogs
    [OPEN_NEW_GROUP_DIALOG](state) {
        state.windowDialogs.isNewGroupDialogOpened = true;
    },
    [CLOSE_NEW_GROUP_DIALOG](state) {
        state.windowDialogs.isNewGroupDialogOpened = false;
    },
    [OPEN_NEW_GRADIENT_DIALOG](state) {
        state.windowDialogs.isNewGradientDialogOpened = true;
    },
    [CLOSE_NEW_GRADIENT_DIALOG](state) {
        state.windowDialogs.isNewGradientDialogOpened = false;
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;
