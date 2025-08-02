 function EmailCheckErro(e){
    var regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regularExpression.test(e);
}

export default  EmailCheckErro; 