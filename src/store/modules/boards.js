import sort from '../../utils/helpers';
// initial state
const state = {
    all: [{
        name: 'welcome',
        editMode: false,
        tasks: []
    }]
}

// actions
const actions = {

    updateBoards( { commit }, list) {
        commit('updateBoards', list)
    },

    addBoard({ commit }, name) {
        commit('pushBoard', name)
    },

    removeBoard({commit}, id) {
        commit('removeBoard', id)
    },

    addTask({ commit }, id) {
        commit('pushTaskToBoard', id)
    },

    removeTask({ commit }, task) {
        commit('deleteTaskFromBoard', task)
    },

    updateBoardsTasks({commit}, tasks) {
        commit('updateBoardsTasks', tasks)
    },

    toogleEditing({ commit }, id) {
        commit('toogleEditing', id)
    },

    toogleEditingTask({ commit }, task) {
        commit('toogleEditingTask', task)
    },

    sortTaskAlphabetically( {commit }, task) {
        commit('sortTaskAlphabetically', task)
    }
}

const mutations = {
    
    updateBoards( state, list ) {
        state.all = list;
    },

    pushBoard(state,  name ) {
        state.all.push({
            name: name ? name : null,
            editMode: false,
            tasks:[]    
        });  
    },

    removeBoard( state, id ) {
        const arr = state.all.filter( (item, index) => index !== id)
        state.all = arr;
    },

    pushTaskToBoard(state, id) {
        state.all[id].tasks.push({
            name: '',
            editMode: true
        }) 
    },

    deleteTaskFromBoard(state, { id , parentId} ) {
        const arr = state.all[parentId].tasks.filter( (item, index) => index !== id)
        state.all[parentId].tasks = arr;
    },

    updateBoardsTasks( state , { parentId, list}) {
        state.all[parentId].tasks = list;
    },

    toogleEditing(state, id) {
        state.all[id].editMode = !state.all[id].editMode;  
    },

    toogleEditingTask(state, { id, parentId }) {
        state.all[parentId].tasks[id].editMode = !state.all[parentId].tasks[id].editMode;  
    },

    sortTaskAlphabetically( state , parentId) {
        state.all[parentId].tasks = sort(state.all[parentId].tasks)
    }
}

export default {
    state,
    mutations,
    actions,
}
