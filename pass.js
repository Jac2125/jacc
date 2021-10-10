        run();
        //Add this to you script
        function run(){
            var password = prompt("Password Please");
            //Change to your own Password
                if(password != 2580){
                    document.body.innerHTML = '';
                    document.body.innerHTML = 'Password Failed! Reload to enter Password\n\nask the password to the administer';
                    
                }else{
                    alert('Success');
                    window.location.href = "https://jac2125.github.io/jacc/PhotoShit.html";

                }
        }