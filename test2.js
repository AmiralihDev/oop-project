let student = []
class Teacher{
    addTeacher(name, lastname){
        this.name = name
        this.lastname = lastname        
    }
    setTeacherCourse(course){
       if(this.lastname && this.name){
        this.course = course
       };
    }
    setTeacherInfo(natinality,natinalId, phoneNumber,rate,age,addres){
        if(this.lastname && this.name){
            this.teacherInfo = {
                natinality : natinality,
                natinalId : natinalId,
                phoneNumber : phoneNumber,
                rate :rate,
                age : age,
                addres , addres
            }
            
        }
    }
}

const firstTeacher = new Teacher
firstTeacher.addTeacher("ali","ali")
firstTeacher.setTeacherCourse("js")
firstTeacher.setTeacherInfo("iran","888","03999","5.5","18","bushehr")

console.log(firstTeacher);