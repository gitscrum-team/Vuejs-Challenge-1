<template>
    <div class="board-container">
        <modal v-if="showModal" @close="onCloseModal">
            <h3 slot="header">New Task</h3>
            <h3 slot="body">
                <form @submit="onConfirm">
                    <div class="row form-group">
                        <div class="col-10 offset-1">
                            <label for="title">Title</label>
                            <input id="title" type="text" class="form-control" v-model="record.title" required maxlength="50"/>
                        </div>
                        <div class="col-10 offset-1">
                            <label for="desc">Description</label>
                            <textarea id="desc" class="form-control" v-model="record.desc" rows="3"/>
                        </div>
                        <div class="col-10 offset-1">
                            <label for="status">Status</label>
                            <select id="status" class="form-control" v-model="record.status">
                                <option v-for="option in status" v-bind:value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <div class="col-10 offset-1">
                            <label for="owner">Owner</label>
                            <select id="owner" class="form-control" v-model="record.owners" multiple>
                                <option v-for="option in owners" v-bind:value="option">
                                    {{ option.name }} - {{ option.role }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row float-right">
                        <button type="submit" class="btn btn-primary">Create</button>
                        <button type="button" class="btn" @click="onCloseModal">Close</button>
                    </div>
                </form>
            </h3>
            <h3 slot="footer">
            </h3>
        </modal>

        <h4 class="board-container-title">
            {{ columnTitle }}
        </h4>
        <draggable class="board-container-card" v-model="tasks" group="tasks" @start="drag=true" @end="drag=false">
            <div v-for="(item, index) in tasks"
                 is="board-task"
                 :key="index"
                 :record="item"
                 :onRemove="() => onRemoveTask(index, item.title)"/>
            <em class="eva eva-plus-outline eva-3x pointer" title="Add new task" @click="onClick"/>
        </draggable>
        <em class="eva eva-close-circle-outline eva-2x board-container-close" v-if="!isDefault" @click="onRemove"/>
        <em class="eva eva-list-outline eva-2x board-container-sort" @click="onSort" v-if="tasks.length > 1"/>
    </div>
</template>
<script lang="ts" src="./BoardContainer.ts"></script>
<style lang="scss" src="./board-container.scss"/>
