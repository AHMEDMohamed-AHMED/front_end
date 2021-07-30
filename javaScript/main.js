//console.log('hello');
const faqBox1 = document.getElementById("faqbox1");
faqBox1.addEventListener('click', faqAnim1 = ()=>{
    
    document.getElementById("firstinfobox").style.display='contents';
document.getElementById("secondinfobox").style.display='none';
document.getElementById("thirdinfobox").style.display='none';
document.getElementById("sixthinfobox").style.display='none';
    document.getElementById("fifthinfobox").style.display='none';
    document.getElementById("fourthinfobox").style.display='none';

})


const faqBox2 = document.getElementById("faqbox2");
faqBox2.addEventListener('click', faqAnim2 = ()=>{
    document.getElementById("secondinfobox").style.display='contents';
    document.getElementById("firstinfobox").style.display='none';
    document.getElementById("thirdinfobox").style.display='none';
    document.getElementById("sixthinfobox").style.display='none';
    document.getElementById("fifthinfobox").style.display='none';
    document.getElementById("fourthinfobox").style.display='none';
})


const faqBox3 = document.getElementById("faqbox3");
faqBox3.addEventListener('click', faqAnim3 = ()=>{
    document.getElementById("thirdinfobox").style.display='contents';
    document.getElementById("secondinfobox").style.display='none';
    document.getElementById("firstinfobox").style.display='none';
    document.getElementById("sixthinfobox").style.display='none';
    document.getElementById("fifthinfobox").style.display='none';
    document.getElementById("fourthinfobox").style.display='none';
})


const faqBox4 = document.getElementById("faqbox4");
faqBox4.addEventListener('click', faqAnim4 = ()=>{
    document.getElementById("fourthinfobox").style.display='contents';
    document.getElementById("thirdinfobox").style.display='none';
    document.getElementById("secondinfobox").style.display='none';
    document.getElementById("firstinfobox").style.display='none';
    document.getElementById("sixthinfobox").style.display='none';
    document.getElementById("fifthinfobox").style.display='none';
    
})



const faqBox5 = document.getElementById("faqbox5");
faqBox5.addEventListener('click', faqAnim5 = ()=>{
    document.getElementById("fifthinfobox").style.display='contents';
    document.getElementById("fourthinfobox").style.display='none';
    document.getElementById("thirdinfobox").style.display='none';
    document.getElementById("secondinfobox").style.display='none';
    document.getElementById("firstinfobox").style.display='none';
    document.getElementById("sixthinfobox").style.display='none';
})




const faqBox6 = document.getElementById("faqbox6");
faqBox6.addEventListener('click', faqAnim6 = ()=>{
document.getElementById("sixthinfobox").style.display='contents';
    document.getElementById("fifthinfobox").style.display='none';
    document.getElementById("fourthinfobox").style.display='none';
    document.getElementById("thirdinfobox").style.display='none';
    document.getElementById("secondinfobox").style.display='none';
    document.getElementById("firstinfobox").style.display='none';
})