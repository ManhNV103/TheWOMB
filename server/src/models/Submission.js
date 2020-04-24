import { Model } from 'objection';
import { format } from 'date-fns';
import OrganizationSubmission from './OrganizationSubmission';

class Submission extends Model {
    static get tableName() {
        return 'submissions';
    }
    
    static get relationMappings() {
        return {
            organizationSubmissions: {
                relation: Model.HasManyRelation,
                modelClass: OrganizationSubmission,
                join: {
                    from: 'organization_submissions.submission_id',
                    to: 'submissions.id'
                }
            }
        };
    }

    $beforeInsert() {
        this.created_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }

    $beforeUpdate() {
        this.updated_at = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    }
}

export default Submission;