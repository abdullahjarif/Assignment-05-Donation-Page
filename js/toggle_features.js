// document.getElementById('donate_btn_1').addEventListener("click",function(){
//     showSectionById('notification_container');
// });
document.getElementById('btn_donateForm').addEventListener("click",function(){
    showSectionById('donation_container');
});
document.getElementById('btn_historyForm').addEventListener("click",function(){
    showSectionById('history_container');
});
// blog button
document.getElementById('blog_btn').addEventListener("click",function(){
    window.location.href = 'blog.html';
});