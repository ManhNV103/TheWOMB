import { Model } from 'objection';
import { format } from 'date-fns';
import { API_BASE, STORAGE_DIR } from '../constants';
import fs from 'fs';

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

    getConfigFile() {
        if(!this.config_file) {
            throw new Error("Config file not defined");
        }

        const file = `${STORAGE_DIR}/${this.id}/${this.config_file}`;

        try {
            const raw = fs.readFileSync(file)

            return JSON.parse(raw);
        } catch(e) {
            throw new Error(e.message);
        }
    }
    
    fetchForm() {
        return this.getConfigFile();
    }

    $beforeInsert() {
        this.created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
}

export default Organization;