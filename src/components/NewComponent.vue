<template>
    <div>
        <student 
            v-for="student in studentList" 
            :key="student.id"
            :data="student"
            @foo="childComponentCall"
        >

        </student>
        
        
    </div>
</template>

<script>

import Student from "@/components/Student";


export default {
    name:"NewComponent",
    data() {
        return{
            passScore : 70,

            studentList :[
                {id:1, name :"student1", reTakeCount:1, score : 68, passed:true},
                {id:2, name :"student2", reTakeCount:2, score : 30, passed:false},
                {id:3, name :"student3", reTakeCount:3, score : 90, passed:true},
                {id:4, name :"student4", reTakeCount:2, score : 78, passed:true},
                {id:5, name :"student5", reTakeCount:2, score : 18, passed:false},
                {id:6, name :"student6", reTakeCount:1, score : 88, passed:true},
                {id:7, name :"student7", reTakeCount:1, score : 100, passed:true},
                {id:8, name :"student8", reTakeCount:2, score : 15, passed:false}
            ]
        } 
    },
    components:{
       Student
        
    },
    computed : {
        filteredStudents () {
            return this.studentList.filter(student=>student.passed && student.score >= this.passScore)
        }
    },
    methods:{
        childComponentCall(id, score){
            console.log("childMethodCall : ", id, score)
            this.studentList.filter(s=>s.id===id).map(s=>s.score=score);
        }
    },
    watch : {
        passScore(newValue, oldValue){
            console.log("passScore changed")
            console.log(newValue, oldValue)
        },
        filteredStudents(newValue, oldValue){
            console.log("filteredStudents changed")
            console.log(newValue, oldValue)
        }
    },
    mounted () {
        setTimeout(() => {
            this.passScore = 50
        }, 3000);
    }


}

</script>

<style scoped>

</style>