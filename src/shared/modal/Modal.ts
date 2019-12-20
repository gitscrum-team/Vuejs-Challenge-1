import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'Modal'
})
export default class Modal extends Vue {

    close(): void {
        this.$emit('close');
    }
}
