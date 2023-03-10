import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueServiceId {
    private numberOfGenerationIds = 0;

    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix || !this.validId.test(prefix)) {
            throw Error('Prefix cannot be empty')
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGenerationIds++
        return `${prefix}-${uniqueId}`
    }

    public getNumberOfGenerateUniqueIds(): number {
        return this.numberOfGenerationIds;
    }

    private generateUniqueId(): string {
        return uuidv4()
    }
}