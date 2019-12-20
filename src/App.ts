import { Component, Vue } from 'vue-property-decorator';
import Board from '@/components/board/Board.vue';

@Component({
    components: {
        Board
    }
})
export default class App extends Vue {
}
