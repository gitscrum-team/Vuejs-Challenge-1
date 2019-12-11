import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { TaskInterface as Task } from '@/ts-data-types/TaskInterface';

Vue.use(Vuex);

const kanbanData = {
    namespaced: true,
    state: {
        nextID: 1,
        tasks: new Array<Task>(),
        stages: new Array<string>('on-hold', 'in-progress')
    },
    mutations: {
        resetStages: (state, data: string[]) => {
            if (data) {
                state.stages = new Array<string>(...data);
            } else {
                state.stages = new Array<string>('on-hold', 'in-progress');
            }
        },

        resetTasks: (state, data: Task[] = []) => {
            state.tasks = new Array<Task>(...data);
            if (data.length <= 0) {
                state.nextID = 1;
            }
        },

        addTask: (state, data: Task) => {
            state.tasks.push(data);
        },

        // @ts-ignore
        updateTask(state: any, data: any) {
            const item: Task = data.item;
            delete data.item;
            // @ts-ignore
            for (const i in data) {
                if (item[i] !== undefined) {
                    item[i] = data[i];
                }
            }
        },

        incrementNextTaskID(state: any) {
            state.nextID ++;
        }
    },
    actions: {
        sort(context: any, { stage, order }) {
            const asc  = (a: Task, b: Task) => (a.status !== stage || a.title > b.title) ? 1 : -1;
            const desc = (a: Task, b: Task) => (b.status !== stage || a.title < b.title) ? 1 : -1;
            const t: Task[] = context.getters.taskList.slice();

            t.sort(order === 'asc' ? asc : desc);

            context.commit('resetTasks', t);
        },

        deleteTask(context: any, task) {
            const t: Task[] = context.getters.taskList.filter(b => b.id !== task.id);

            context.commit('resetTasks', t);
        },

        addNewTask: (context: any, status: string) => {
            const id = context.state.nextID;
            context.commit('incrementNextTaskID');
            context.commit('addTask', {
                id: id,
                status: status,
                title: '',
                edit: true
            });
        },
    },
    getters: {
        taskList: (state: any) => {
            return state.tasks;
        },

        stageList: (state: any) => {
            return state.stages;
        }
    }
};


export default new Vuex.Store({
    strict: true,
    modules: {
        kanbanData: kanbanData
    }
});
