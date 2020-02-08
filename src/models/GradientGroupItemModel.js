import IdGeneratorModel from './IdGeneratorModel';

const idGenerator = new IdGeneratorModel()

export default class GradientGroupItemModel {
    constructor (data) {
        this.id = idGenerator.getGeneratedId();
        this.gradient = data.gradient;
    }
}
