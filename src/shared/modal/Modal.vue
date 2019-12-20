<template>
    <div class="vue-modal">
        <div class="vue-modal-mask">
            <div class="vue-modal-wrapper">
                <div class="vue-modal-container modal-content modal-lg">

                    <div class="modal-header">
                        <slot name="header">
                            default header
                        </slot>
                        <button class="btn btn-link btn-lg" @click="$emit('close')">
                            &times;
                        </button>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Modal.ts"/>
<style lang="scss" src="./modal.scss"/>
