import {EntityMetadata} from "..";
import {EntityColumnNotFound} from "./EntityColumnNotFound";

/**
 * Thrown when specified entity property in the find options were not found.
 */
export class FindCriteriaNotFoundError extends EntityColumnNotFound {

    constructor(propertyPath: string, metadata: EntityMetadata) {
        super(propertyPath);
        Object.setPrototypeOf(this, FindCriteriaNotFoundError.prototype);
        this.message = `Property "${propertyPath}" was not found in ${metadata.targetName}. Make sure your query is correct.`;
    }

}
