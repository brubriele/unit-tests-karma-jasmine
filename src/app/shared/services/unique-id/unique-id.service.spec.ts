import { UniqueServiceId } from "./unique-id.service";

describe(UniqueServiceId.name, () => {
    // Tudo que diz respeito ao artefato que queremos testar

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate ID only when called with prefix`, () => {
       const service = new UniqueServiceId;
       const id = service.generateUniqueIdWithPrefix('app');
       expect(id).toContain('app-')
    });
})