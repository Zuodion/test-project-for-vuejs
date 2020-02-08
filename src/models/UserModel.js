import GradientGroupModel from './GradientGroupModel'

export default class UserModel {
    gradientGroups = [];
    constructor(data) {
        this.name = data.name;
        this.password = data.password;
        if (Array.isArray(data.gradientGroups) && data.gradientGroups.length > 0) {
            this.setGradientGroups(data.gradientGroups);
        }
    }
    setGradientGroups(gradientGroups) {
        gradientGroups.forEach(group => {
            let serializedGroup = new GradientGroupModel(group);
            this.gradientGroups.push(serializedGroup);
        });
    }
}
