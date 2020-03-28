import { Model } from 'objection';
import { format } from 'date-fns';

class Organization extends Model {
    static get tableName() {
        return 'organizations';
    }

    $beforeInsert() {
        this.created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
}

export default Organization;