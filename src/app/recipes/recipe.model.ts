export class Recipe {
    name: string;
    description: string;
    imagePath: string;

    constructor(name: string, desc: string, impagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = impagePath;
    }
}