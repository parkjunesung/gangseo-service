function sendSMS() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var url = "sms:";
    url += phone + "?body=강서 서비스센터\n" +
        "성함 : " + name + "\n" +
        "내용 : " + message

    location.href = url;
}