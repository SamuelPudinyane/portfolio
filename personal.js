document.addEventListener("alpine:init",()=>{
    Alpine.data('data',()=>{
        return {
            username:'Samuel T Pudinyane',
            fullName:'Samuel Tiisetso Pudinyane',
            aboutMe_p1:"I am Samuel Tiisetso Pudinyane from Free State Province, South Africa, with a BSc in Software Engineering. I studied at Bahçeşehir University in Turkey through a scholarship opportunity from the Free State Government. I am currently seeking an internship opportunity to complete my training as required by the university.",
            aboutMe_p2:"I firmly believe that given the right opportunity, it would enable me to access new adventures and growth possibilities. I am keen to explore, develop, and gain new skills. I have obtained certificates from Microsoft in Data Fundamentals, Azure Cloud Fundamentals, and Azure AI Fundamentals, as well as JavaScript certification from FreeCodeCamp.",
            aboutMe_p3:"I am a proactive individual who approaches problems with multiple solution strategies. I am analytical when assessing risks before implementing solutions. I possess strong communication skills and have an excellent reputation for collaboration and teamwork. I am an articulate person with strong critical thinking abilities, always striving for optimal results.",
            sacArrayList:[],
            home(){
                return window.location.href = "index.html";
            },
            contacts(){
                return window.location.href = "personal-contacts.html";
            },
            personal_about(){
                return window.location.href = "personal-about.html";
            },
            personal_projects(){
                return window.location.href = "personal-projects.html";
            },
            sacArray(){
                this.sacArrayList.push("images/sac1.png");
                this.sacArrayList.push("images/sac2.png");
                this.sacArrayList.push("images/sac3.png");
                this.sacArrayList.push("images/sac4.png");
                this.sacArrayList.push("images/sac5.png");
            }
        }
    })
})