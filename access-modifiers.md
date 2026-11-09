Mastering Access Modifiers in TypeScript OOP


Introduction
Object-Oriented Programming (OOP) helps us organize our code safely. TypeScript makes JavaScript classes much better by adding "Access Modifiers": public, private, protected, and readonly. Think of these keywords as security guards. They control who is allowed to see or change the data inside your class.



How Each Modifier Works
Let's look at how these four keywords protect our data in simple terms:

public: This is the default setting. Anyone can access or change this data from anywhere, both inside and outside the class.

private: This is highly secure. Only the exact class where it was created can use it. No outside code, not even child classes, can see a private property.

protected: This is a mix of private and public. It is hidden from the outside world, but child classes (classes that use extends) are allowed to use it.

readonly: This keyword means the data is for reading only. You can set its value once when you create the object, but after that, it can never be changed.

Simple Code Example
```
class Employee {
    public company: string = "Tech Corp"; 
    readonly id: number;                  
    constructor(protected name: string, private salary: number, id: number) {
        this.id = id;
    }
}

class Manager extends Employee {
    getRole(): string {
        return `Manager ${this.name} works at ${this.company}`;
    }
}
```

Conclusion
Using access modifiers stops you and other developers from making accidental mistakes. As we saw in the example, protected lets the Manager use the employee's name, but private safely hides the salary. These simple keywords make your TypeScript code secure, clean, and bug-free.