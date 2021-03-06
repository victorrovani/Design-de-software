
export class Singleton {
   
    private static instance: Singleton;

    public name?: string;
  
    private constructor() { 
        this.name = 'Victor'
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

}
