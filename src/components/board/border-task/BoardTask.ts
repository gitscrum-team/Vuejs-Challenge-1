import { Component, Prop, Vue } from 'vue-property-decorator';
import { BoardTaskObj } from '@/components/board/border-task/BoardTaskObj';
import VueInitialsImg from 'vue-initials-img/src/app.vue';
import { EStatus } from '@/components/enum/Status.enum';

@Component({
    name: 'board-task',
    components: {
        VueInitialsImg
    }
})
export default class BoardTask extends Vue {
    @Prop() record!: BoardTaskObj;
    @Prop() onRemove!: Function;

    getStatusStyle() {
        if (this.record.status === EStatus.DONE) {
            return 'border-success';
        } else if (this.record.status === EStatus.CANCELED) {
            return 'border-danger';
        } else if (this.record.status === EStatus.BLOCKED) {
            return 'border-warning';
        } else {
            return 'border-primary';
        }
    }
}
