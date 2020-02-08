const NON_INDEX = -1;

export default class IdGeneratorModel {
    constructor () {
        this._id = NON_INDEX;
    }

    getGeneratedId () {
        this._id++;
        return this._id;
    }
}
