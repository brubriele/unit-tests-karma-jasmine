import { UniqueServiceId } from "./unique-id.service";

describe(UniqueServiceId.name, () => {
    // Tudo que diz respeito ao artefato que queremos testar

    let service: UniqueServiceId = null;
    beforeEach(() => {
        service = new UniqueServiceId();
    });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} 
    should generate ID only when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} 
    should generate duplicated IDs when called multiple times`, () => {
        const ids = new Set()
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app-'))
        }
        expect(ids.size).toBe(50)
    });

    it(`#${UniqueServiceId.prototype.getNumberOfGenerateUniqueIds.name} 
    should return the number of generateIDs when called`, () => {
        service.generateUniqueIdWithPrefix('app')
        service.generateUniqueIdWithPrefix('app')

        expect(service.getNumberOfGenerateUniqueIds()).toBe(2)
    });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} 
    should throw error when called with empty arguments`, () => {
        const emptyValues = [null, undefined, '', '0', '1']

        emptyValues.forEach(emptyValue => {
            expect(() => service.generateUniqueIdWithPrefix(emptyValue))
            .withContext(`Empty value: ${emptyValue}`)
            .toThrow();
        });
    });

})