import { Model } from 'objection';
import { format } from 'date-fns';
import { API_BASE, STORAGE_DIR } from '../constants';

class Organization extends Model {
    static get tableName() {
        return 'organizations';
	}
	
	getImageFile() {
		return `${process.cwd()}/${STORAGE_DIR}/${this.id}/${this.image}`;
	}

	getImageUrl() {
		return `${API_BASE}/organizations/${this.id}/${this.image}`;
	}

    $beforeInsert() {
        this.created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
}

export default Organization;