import Swal from 'sweetalert2';
import { Component, Vue } from 'vue-property-decorator';
import BoardContainer from '@/components/board/board-container/BoardContainer.vue';
import { BoardContainerObj } from '@/components/board/board-container/BoardContainerObj';
// @ts-ignore
import draggable from 'vuedraggable';

@Component({
    components: {
        BoardContainer,
        draggable
    }
})
export default class Board extends Vue {
    columns: Array<BoardContainerObj> = new Array<BoardContainerObj>();

    constructor() {
        super();
        this.columns.push({ title: 'To-do' } as BoardContainerObj);
    }

    onRemove(index: number, title: string) {
        Swal.fire({
            icon: 'warning',
            title: `Remove column '${ title }'?`,
            showCancelButton: true
        }).then(({ value }) => value && this.columns.splice(index, 1));
    }

    onClick(): void {
        Swal.fire({
            title: 'Type column title',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Add'
        }).then(({ value: title }) => title && this.columns.push({ title } as BoardContainerObj));
    }
}
