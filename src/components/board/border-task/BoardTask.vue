<template>
    <div class="board-task">
        <h5 class="board-task-title">{{ record.title }}</h5>
        <div class="board-task-owners" v-bind:class="getStatusStyle()">
            <div class="board-task-avatar" v-for="owner in record.owners">
                <vue-initials-img :name="owner.name"/>
            </div>
        </div>
        <div class="d-flex justify-content-end">
            <em class="eva eva-calendar-outline eva-2x"/>
            <em class="eva eva-pricetags-outline eva-2x"/>
        </div>
        <em class="eva eva-close-circle-outline eva-2x board-container-close" @click="onRemove"/>
    </div>
</template>
<script lang="ts" src="./BoardTask.ts"></script>
<style lang="scss" src="./board-task.scss"/>
