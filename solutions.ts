const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier !== undefined) {
        return value * multiplier;
    } else {
        return value * 2;
    }
};





const processInput = (value : string | number | boolean) : string | number=>{

    if(typeof value === "string"){
       return value.trim().toLowerCase()
    }
    else if ( typeof value === "number"){
        return value * 10
    }
    else{
        if(value === true) {
           return "Active"
        }else
       return "Inactive"
    }
}







const formatCoordinate =(arr : readonly[number,number,string]) : string =>{
    return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`

}







const concatenateArrays = <T> (...arrays : T[][]) : T[]=>{
    return arrays.reduce((acc,currentArray)=> acc.concat(currentArray),[] as T[])
}






interface Course {
    title : string,
    students : number,
    isPublished : boolean;

}

const getPopularCourses = ( courses : Course[], minStudents:number):Course[]=>{
    return courses.filter((item)=>item.isPublished===true && item.students >= minStudents)
}







const pluckValues =<T ,K extends keyof T>(items : T[] , key : K) : T[K][]=>{
     return items.map((item)=>item[key]);
}









class Employee {
     constructor(protected name: string , private baseSalary : number){}
       
     
      getDetails(): string {
      return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`         
      }
     
}

class Manager extends Employee {
   
    constructor (name:string, baseSalary: number ,  private department : string){
        super(name,baseSalary)
      
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}








const validateAgeAsync =(age:number):Promise<string> =>{
    return new Promise((resolve,reject)=>{
        if(age >= 18){
            setTimeout(()=>{
                resolve("Access Granted");
            },1000)
        }else {
            
                reject(new Error("Access Denied: Must be 18 or older"));
           
        }
    })
}