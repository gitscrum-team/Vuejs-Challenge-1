import { Owner } from '@/components/model/owner';
import { EStatus } from '@/components/enum/Status.enum';

export interface BoardTaskObj {
    title: string
    desc: string
    owners: Array<Owner>
    status?: EStatus
}
