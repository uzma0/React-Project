class Student {
    
    constructor(name, email, community) {
    
        this.name = name;
    
        this.email = email;
    
        this.community = community;
    
    }
    
};
    
class Bootcamp {
    
    constructor(name, level, students = []) {
    
        this.name = name;
    
        this.level = level;
    
        this.students = students;
    
    }
        registerStudent(studentToRegister) {
           if (this.students.filter((s) => s === studentToRegister).length){
            console.log(`${studentToRegister.name} is already registered`);
            } else {
            this.students.push(studentToRegister);
           console.log(`Registering ${studentToRegister.name} to ${this.name} with email ${studentToRegister.email}`);
            }
            return this.students;
        }

    
};



    const uzma = new Student ('uzma', 'uzamanaz19@gmail.com','lodi');
    const Maria = new Student ('Maria', 'Maria10@gmail.com', 'Sacramento');
    const Nucamp = new Bootcamp ('React', 'Level 3');
    Nucamp.registerStudent(uzma);
    Nucamp.registerStudent(Maria);
    Nucamp.registerStudent(Maria);