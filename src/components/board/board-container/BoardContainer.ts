import { Component, Prop, Vue } from 'vue-property-decorator';
import { BoardTaskObj } from '@/components/board/border-task/BoardTaskObj';
import Modal from '@/shared/modal/Modal.vue';
import { Owner } from '@/components/model/owner';
import BoardTask from '@/components/board/border-task/BoardTask.vue';
import { EStatus } from '@/components/enum/Status.enum';
// @ts-ignore
import draggable from 'vuedraggable';
import Swal from 'sweetalert2';

@Component({
    name: 'board-container',
    components: {
        BoardTask,
        Modal,
        draggable
    }
})
export default class BoardContainer extends Vue {
    @Prop() columnTitle!: string;
    @Prop() isDefault!: boolean;
    @Prop() onRemove!: Function;
    private record!: BoardTaskObj;
    private showModal: boolean = false;
    private tasks: Array<BoardTaskObj> = new Array<BoardTaskObj>();
    protected owners: Array<Owner> = new Array<Owner>();
    protected status: Array<EStatus> = new Array<EStatus>();

    constructor() {
        super();
        this.reset();
        // fake lists
        this.owners.push(...[{
            id: 1,
            name: 'Aldo Bernardes Maciel',
            role: 'Developer'
        }, {
            id: 2,
            name: 'João Bessa',
            role: 'Developer'
        }, {
            id: 3,
            name: 'Renato Marinho',
            role: 'Coordinator'
        }]);
        this.status.push(EStatus.BLOCKED, EStatus.CANCELED, EStatus.DONE, EStatus.PENDING);
    }

    onClick(): void {
        this.showModal = true;
    }

    onCloseModal(): void {
        this.showModal = false;
    }

    onConfirm(): void {
        this.tasks.push(this.record);
        this.reset();
        this.onCloseModal();
    }

    private reset() {
        this.record = { owners: new Array<Owner>() } as BoardTaskObj;
    }

    onRemoveTask(index: number, title: string) {
        Swal.fire({
            icon: 'warning',
            title: `Remove task '${ title }'?`,
            showCancelButton: true
        }).then(({ value }) => value && this.tasks.splice(index, 1));
    }

    onSort() {
        this.tasks.sort((a1, a2) => a1.title.localeCompare(a2.title));
    }
}
