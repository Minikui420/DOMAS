import { Injectable } from '@tsed/common'
import { FamilyCard } from '../entity/FamilyCard'
import { ClientRequest } from '../decorators/decorators'



@Injectable()
export class FamilyService {

    @ClientRequest()
    async createFamily(familyCard: FamilyCard): Promise<FamilyCard> {
        return familyCard
    }

    @ClientRequest()
    async getFamily(familyCard: FamilyCard): Promise<FamilyCard> {
        return familyCard
    }

    @ClientRequest()
    async editFamily(familyCard: FamilyCard): Promise<FamilyCard> {
        return familyCard
    }

}

