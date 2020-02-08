import IdGeneratorModel from './IdGeneratorModel';
import GradientGroupItemModel from './GradientGroupItemModel';

const idGenerator = new IdGeneratorModel()

export default class GradientGroupModel {
    gradients = [];
    constructor (data) {
        this.id = idGenerator.getGeneratedId();
        this.name = data.name;
        if (Array.isArray(data.gradients) && data.gradients.length > 0) {
            this.setGradients(data.gradients)
        }
    }
    setGradients(gradients) {
        gradients.forEach(gradient => {
            let serializedGradient = new GradientGroupItemModel(gradient);
            this.gradients.push(serializedGradient);
        });
    }
}
