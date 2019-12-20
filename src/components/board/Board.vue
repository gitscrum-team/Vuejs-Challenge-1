<template>
    <div class="board">
        <div class="board-title">Task Board</div>
        <draggable class="board-content" v-model="columns" group="columns" @start="drag=true" @end="drag=false">
            <div v-for="(item, index) in columns"
                 is="board-container"
                 :key="item.title"
                 :columnTitle="item.title"
                 :isDefault="columns.length === 1"
                 :onRemove="() => onRemove(index, item.title)"/>
            <em class="eva eva-plus-circle-outline eva-3x pointer white-color board-content-new" title="Add new column" @click="onClick"/>
        </draggable>
    </div>
</template>

<script lang="ts" src="./Board.ts"/>
<style scoped lang="scss" src="./board.scss"/>
