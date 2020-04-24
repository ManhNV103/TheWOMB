import { Model } from 'objection';
import { format } from 'date-fns';
import Submission from './Submission';
import Organization from './Organization';

class OrganizationSubmission extends Model {
    static get tableName() {
        return 'organization_submissions';
    }

    static get relationMappings() {
        return {
            submission: {
                relation: Model.BelongsToOneRelation,
                modelClass: Submission,
                join: {
                    from: 'submissions.id',
                    to: 'organization_submissions.submission_id'
                }
            },
            organization: {
                relation: Model.BelongsToOneRelation,
                modelClass: Organization,
                join: {
                    from: 'organizations.id',
                    to: 'organization_submission.orgazation.id'
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

export default OrganizationSubmission;